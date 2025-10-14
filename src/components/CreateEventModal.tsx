import { useState } from "react";
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

interface CreateEventModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateEventModal = ({ open, onOpenChange }: CreateEventModalProps) => {
  const [eventType, setEventType] = useState<"upcoming" | "past" | "calendar">("upcoming");
  const [isRecurring, setIsRecurring] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted - UI only for now");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Create New Event</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Tabs value={eventType} onValueChange={(value) => setEventType(value as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Event</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="upcoming-title">Event Title</Label>
                <Input id="upcoming-title" placeholder="Enter event title" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="upcoming-date">Date</Label>
                  <Input id="upcoming-date" type="text" placeholder="e.g., March 15, 2024" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="upcoming-time">Time</Label>
                  <Input id="upcoming-time" placeholder="e.g., 7:00 PM - 9:00 PM" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="upcoming-location">Location</Label>
                <Input id="upcoming-location" placeholder="Enter location" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="upcoming-description">Description</Label>
                <Textarea
                  id="upcoming-description"
                  placeholder="Enter event description"
                  rows={4}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="upcoming-recurring"
                  checked={isRecurring}
                  onCheckedChange={(checked) => setIsRecurring(checked as boolean)}
                />
                <Label htmlFor="upcoming-recurring" className="cursor-pointer">
                  Recurring Event
                </Label>
              </div>

              {isRecurring && (
                <div className="space-y-2">
                  <Label htmlFor="upcoming-pattern">Recurrence Pattern</Label>
                  <Select>
                    <SelectTrigger id="upcoming-pattern">
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
            </TabsContent>

            <TabsContent value="past" className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="past-title">Event Title</Label>
                <Input id="past-title" placeholder="Enter event title" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="past-date">Date</Label>
                <Input id="past-date" type="text" placeholder="e.g., November 11, 2023" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="past-participants">Participants</Label>
                  <Input id="past-participants" placeholder="e.g., 18 participants" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="past-rounds">Rounds</Label>
                  <Input id="past-rounds" placeholder="e.g., 5 rounds" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="past-rating">Rating</Label>
                <Input id="past-rating" placeholder="e.g., USCF Rated" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="past-description">Description</Label>
                <Textarea
                  id="past-description"
                  placeholder="Enter event description"
                  rows={3}
                />
              </div>

              <div className="space-y-4">
                <Label>Winners</Label>
                <div className="space-y-3 border rounded-lg p-4 bg-secondary/20">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-2">
                      <Label htmlFor="winner1-place" className="text-xs">Place</Label>
                      <Input id="winner1-place" placeholder="1st" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="winner1-name" className="text-xs">Name</Label>
                      <Input id="winner1-name" placeholder="Winner name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="winner1-score" className="text-xs">Score</Label>
                      <Input id="winner1-score" placeholder="5-0" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-2">
                      <Label htmlFor="winner2-place" className="text-xs">Place</Label>
                      <Input id="winner2-place" placeholder="2nd" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="winner2-name" className="text-xs">Name</Label>
                      <Input id="winner2-name" placeholder="Winner name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="winner2-score" className="text-xs">Score</Label>
                      <Input id="winner2-score" placeholder="4-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-2">
                      <Label htmlFor="winner3-place" className="text-xs">Place</Label>
                      <Input id="winner3-place" placeholder="3rd" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="winner3-name" className="text-xs">Name</Label>
                      <Input id="winner3-name" placeholder="Winner name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="winner3-score" className="text-xs">Score</Label>
                      <Input id="winner3-score" placeholder="3.5-1.5" />
                    </div>
                  </div>

                  <Button type="button" variant="outline" size="sm" className="w-full mt-2">
                    Add Another Winner
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="calendar-title">Event Title</Label>
                <Input id="calendar-title" placeholder="Enter event title" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="calendar-date">Date</Label>
                  <Input id="calendar-date" type="text" placeholder="e.g., Every Tuesday" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="calendar-time">Time</Label>
                  <Input id="calendar-time" placeholder="e.g., 7:00 PM - 9:00 PM" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="calendar-location">Location</Label>
                <Input id="calendar-location" placeholder="Enter location" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="calendar-description">Description</Label>
                <Textarea
                  id="calendar-description"
                  placeholder="Enter event description"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="calendar-type">Event Type</Label>
                  <Select>
                    <SelectTrigger id="calendar-type">
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
                  <Label htmlFor="calendar-color">Color Code</Label>
                  <Select>
                    <SelectTrigger id="calendar-color">
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
                  id="calendar-recurring"
                  checked={isRecurring}
                  onCheckedChange={(checked) => setIsRecurring(checked as boolean)}
                />
                <Label htmlFor="calendar-recurring" className="cursor-pointer">
                  Recurring Event
                </Label>
              </div>

              {isRecurring && (
                <div className="space-y-2">
                  <Label htmlFor="calendar-pattern">Recurrence Pattern</Label>
                  <Select>
                    <SelectTrigger id="calendar-pattern">
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
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Create Event
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
