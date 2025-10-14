import { useState, FormEvent, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImagePlus, X } from "lucide-react";
import { updateUpcomingEvent, updatePastEvent, updateCalendarEvent, type UpcomingEvent, type PastEvent, type CalendarEvent, type Winner } from "@/lib/eventsService";
import { toast } from "sonner";
import { compressMultipleImages } from "@/lib/imageService";

interface EditEventModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onEventUpdated?: () => void;
  eventType: "upcoming" | "past" | "calendar";
  event: UpcomingEvent | PastEvent | CalendarEvent;
}

export const EditEventModal = ({ open, onOpenChange, onEventUpdated, eventType, event }: EditEventModalProps) => {
  const [isRecurring, setIsRecurring] = useState(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");
  const [winners, setWinners] = useState<Winner[]>([]);

  useEffect(() => {
    if (open && event) {
      const recurringEvent = event as UpcomingEvent | CalendarEvent;
      setIsRecurring(recurringEvent.is_recurring || false);

      if (event.image_paths) {
        try {
          const paths = JSON.parse(event.image_paths);
          setImagePreviews(paths);
        } catch (e) {
          setImagePreviews([]);
        }
      } else {
        setImagePreviews([]);
      }

      if (eventType === "past") {
        const pastEvent = event as PastEvent;
        setWinners(pastEvent.winners || []);
      }
    }
  }, [open, event, eventType]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedImages(prev => [...prev, ...files]);

    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setIsRecurring(false);
    setSelectedImages([]);
    setImagePreviews([]);
    setIsSubmitting(false);
    setLoadingMessage("");
    setWinners([]);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      const title = formData.get("title") as string;
      const date = formData.get("date") as string;

      if (!title || !date) {
        toast.error("Title and date are required fields");
        setIsSubmitting(false);
        return;
      }

      let imagePathsJson: string | undefined = undefined;

      if (selectedImages.length > 0) {
        try {
          setLoadingMessage("Compressing images...");
          const compressedImages = await compressMultipleImages(
            selectedImages,
            eventType,
            { maxWidth: 1920, maxHeight: 1080, quality: 0.8 },
            (current, total) => {
              setLoadingMessage(`Compressing images... ${current}/${total}`);
            }
          );
          const existingPaths = imagePreviews.filter(path => !path.startsWith('data:'));
          const newPaths = compressedImages.map(img => img.dataUrl);
          imagePathsJson = JSON.stringify([...existingPaths, ...newPaths]);
        } catch (error) {
          console.error("Error compressing images:", error);
          toast.error(error instanceof Error ? error.message : "Failed to process images");
          setIsSubmitting(false);
          setLoadingMessage("");
          return;
        }
      } else if (imagePreviews.length > 0) {
        imagePathsJson = JSON.stringify(imagePreviews);
      }

      setLoadingMessage("Updating event...");

      if (eventType === "upcoming") {
        updateUpcomingEvent(event.id!, {
          title,
          date,
          time: formData.get("time") as string || undefined,
          location: formData.get("location") as string || undefined,
          description: formData.get("description") as string || undefined,
          image_paths: imagePathsJson,
          is_recurring: isRecurring,
          recurrence_pattern: isRecurring ? formData.get("pattern") as string : undefined,
        });
        toast.success("Event updated successfully!");
      } else if (eventType === "past") {
        const updatedWinners = [
          {
            place: formData.get("winner1-place") as string,
            name: formData.get("winner1-name") as string,
            score: formData.get("winner1-score") as string,
          },
          {
            place: formData.get("winner2-place") as string,
            name: formData.get("winner2-name") as string,
            score: formData.get("winner2-score") as string,
          },
          {
            place: formData.get("winner3-place") as string,
            name: formData.get("winner3-name") as string,
            score: formData.get("winner3-score") as string,
          },
        ].filter(w => w.place && w.name);

        updatePastEvent(event.id!, {
          title,
          date,
          participants: formData.get("participants") as string || undefined,
          rounds: formData.get("rounds") as string || undefined,
          rating: formData.get("rating") as string || undefined,
          description: formData.get("description") as string || undefined,
          image_paths: imagePathsJson,
          winners: updatedWinners,
        });
        toast.success("Past event updated successfully!");
      } else if (eventType === "calendar") {
        const calendarType = formData.get("type") as string || undefined;
        const colorCode = formData.get("color") as string || undefined;

        updateCalendarEvent(event.id!, {
          title,
          date,
          time: formData.get("time") as string || undefined,
          location: formData.get("location") as string || undefined,
          description: formData.get("description") as string || undefined,
          event_type: calendarType as "meeting" | "tournament" | "social" | "deadline" | undefined,
          color_code: colorCode,
          image_paths: imagePathsJson,
          is_recurring: isRecurring,
          recurrence_pattern: isRecurring ? formData.get("pattern") as string : undefined,
        });
        toast.success("Calendar event updated successfully!");
      }

      resetForm();
      onOpenChange(false);
      setLoadingMessage("");

      if (onEventUpdated) {
        onEventUpdated();
      }
    } catch (error) {
      console.error("Error updating event:", error);
      toast.error(error instanceof Error ? error.message : "Failed to update event. Please try again.");
      setLoadingMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Edit Event</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {eventType === "upcoming" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input id="title" name="title" placeholder="Enter event title" defaultValue={(event as UpcomingEvent).title} required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" name="date" type="text" placeholder="e.g., March 15, 2024" defaultValue={(event as UpcomingEvent).date} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" name="time" placeholder="e.g., 7:00 PM - 9:00 PM" defaultValue={(event as UpcomingEvent).time} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" name="location" placeholder="Enter location" defaultValue={(event as UpcomingEvent).location} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter event description"
                  rows={4}
                  defaultValue={(event as UpcomingEvent).description}
                />
              </div>

              <div className="space-y-2">
                <Label>Event Images (Optional)</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="images"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="images"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <ImagePlus className="w-12 h-12 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Click to upload images or drag and drop
                    </span>
                  </label>
                </div>

                {imagePreviews.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="recurring"
                  checked={isRecurring}
                  onCheckedChange={(checked) => setIsRecurring(checked as boolean)}
                />
                <Label htmlFor="recurring" className="cursor-pointer">
                  Recurring Event
                </Label>
              </div>

              {isRecurring && (
                <div className="space-y-2">
                  <Label htmlFor="pattern">Recurrence Pattern</Label>
                  <Select name="pattern" defaultValue={(event as UpcomingEvent).recurrence_pattern}>
                    <SelectTrigger id="pattern">
                      <SelectValue placeholder="Select pattern" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly_monday">Every Monday</SelectItem>
                      <SelectItem value="weekly_tuesday">Every Tuesday</SelectItem>
                      <SelectItem value="weekly_wednesday">Every Wednesday</SelectItem>
                      <SelectItem value="weekly_thursday">Every Thursday</SelectItem>
                      <SelectItem value="weekly_friday">Every Friday</SelectItem>
                      <SelectItem value="weekly_saturday">Every Saturday</SelectItem>
                      <SelectItem value="weekly_sunday">Every Sunday</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          )}

          {eventType === "past" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input id="title" name="title" placeholder="Enter event title" defaultValue={(event as PastEvent).title} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" name="date" type="text" placeholder="e.g., November 11, 2023" defaultValue={(event as PastEvent).date} required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="participants">Participants</Label>
                  <Input id="participants" name="participants" placeholder="e.g., 18 participants" defaultValue={(event as PastEvent).participants} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rounds">Rounds</Label>
                  <Input id="rounds" name="rounds" placeholder="e.g., 5 rounds" defaultValue={(event as PastEvent).rounds} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rating">Rating</Label>
                <Input id="rating" name="rating" placeholder="e.g., USCF Rated" defaultValue={(event as PastEvent).rating} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter event description"
                  rows={3}
                  defaultValue={(event as PastEvent).description}
                />
              </div>

              <div className="space-y-4">
                <Label>Winners</Label>
                <div className="space-y-3 border rounded-lg p-4 bg-secondary/20">
                  {[0, 1, 2].map((idx) => {
                    const winner = winners[idx];
                    return (
                      <div key={idx} className="grid grid-cols-3 gap-2">
                        <div className="space-y-2">
                          <Label htmlFor={`winner${idx + 1}-place`} className="text-xs">Place</Label>
                          <Input
                            id={`winner${idx + 1}-place`}
                            name={`winner${idx + 1}-place`}
                            placeholder={`${idx + 1}${idx === 0 ? 'st' : idx === 1 ? 'nd' : 'rd'}`}
                            defaultValue={winner?.place}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`winner${idx + 1}-name`} className="text-xs">Name</Label>
                          <Input
                            id={`winner${idx + 1}-name`}
                            name={`winner${idx + 1}-name`}
                            placeholder="Winner name"
                            defaultValue={winner?.name}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`winner${idx + 1}-score`} className="text-xs">Score</Label>
                          <Input
                            id={`winner${idx + 1}-score`}
                            name={`winner${idx + 1}-score`}
                            placeholder="Score"
                            defaultValue={winner?.score}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Event Images (Optional)</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="images"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="images"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <ImagePlus className="w-12 h-12 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Click to upload images or drag and drop
                    </span>
                  </label>
                </div>

                {imagePreviews.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {eventType === "calendar" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input id="title" name="title" placeholder="Enter event title" defaultValue={(event as CalendarEvent).title} required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" name="date" type="text" placeholder="e.g., Every Tuesday" defaultValue={(event as CalendarEvent).date} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" name="time" placeholder="e.g., 7:00 PM - 9:00 PM" defaultValue={(event as CalendarEvent).time} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" name="location" placeholder="Enter location" defaultValue={(event as CalendarEvent).location} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter event description"
                  rows={3}
                  defaultValue={(event as CalendarEvent).description}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Event Type</Label>
                  <Select name="type" defaultValue={(event as CalendarEvent).event_type}>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="meeting">Meeting</SelectItem>
                      <SelectItem value="tournament">Tournament</SelectItem>
                      <SelectItem value="social">Social Night</SelectItem>
                      <SelectItem value="deadline">Deadline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="color">Color Code</Label>
                  <Select name="color" defaultValue={(event as CalendarEvent).color_code}>
                    <SelectTrigger id="color">
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="green">Green (Meetings)</SelectItem>
                      <SelectItem value="blue">Blue (Tournaments)</SelectItem>
                      <SelectItem value="yellow">Yellow (Social)</SelectItem>
                      <SelectItem value="red">Red (Deadlines)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="recurring"
                  checked={isRecurring}
                  onCheckedChange={(checked) => setIsRecurring(checked as boolean)}
                />
                <Label htmlFor="recurring" className="cursor-pointer">
                  Recurring Event
                </Label>
              </div>

              {isRecurring && (
                <div className="space-y-2">
                  <Label htmlFor="pattern">Recurrence Pattern</Label>
                  <Select name="pattern" defaultValue={(event as CalendarEvent).recurrence_pattern}>
                    <SelectTrigger id="pattern">
                      <SelectValue placeholder="Select pattern" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly_monday">Every Monday</SelectItem>
                      <SelectItem value="weekly_tuesday">Every Tuesday</SelectItem>
                      <SelectItem value="weekly_wednesday">Every Wednesday</SelectItem>
                      <SelectItem value="weekly_thursday">Every Thursday</SelectItem>
                      <SelectItem value="weekly_friday">Every Friday</SelectItem>
                      <SelectItem value="weekly_saturday">Every Saturday</SelectItem>
                      <SelectItem value="weekly_sunday">Every Sunday</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label>Event Images (Optional)</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="images"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="images"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <ImagePlus className="w-12 h-12 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Click to upload images or drag and drop
                    </span>
                  </label>
                </div>

                {imagePreviews.length > 0 && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? (loadingMessage || "Updating...") : "Update Event"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
