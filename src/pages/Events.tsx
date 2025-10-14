import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Trophy, Users, Plus, Trash2, Edit } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUpcomingEvents, getPastEvents, getCalendarEvents, type UpcomingEvent, type PastEvent, type CalendarEvent } from "@/lib/eventsService";
import { seedDatabase } from "@/lib/seedData";
import { initDatabase } from "@/lib/db";
import { CreateEventModal } from "@/components/CreateEventModal";
import { EditEventModal } from "@/components/EditEventModal";
import { ImageCarousel } from "@/components/ImageCarousel";

const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([]);
  const [pastEvents, setPastEvents] = useState<PastEvent[]>([]);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<UpcomingEvent | PastEvent | CalendarEvent | null>(null);
  const [editingEventType, setEditingEventType] = useState<"upcoming" | "past" | "calendar">("upcoming");

  const loadData = async () => {
    try {
      await initDatabase();
      const upcoming = getUpcomingEvents();
      if (upcoming.length === 0) {
        await seedDatabase();
      }
      setUpcomingEvents(getUpcomingEvents());
      setPastEvents(getPastEvents());
      setCalendarEvents(getCalendarEvents());
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load events');
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">Error: {error}</p>
      </div>
    );
  }

  const meetingCalendarEvents = calendarEvents.filter(event => event.event_type === 'meeting');

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-32 bg-dark-bg text-dark-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/40 to-dark-bg/20 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=1200')",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Events</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-primary">Events</span>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-end mb-6">
            <Button
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Button>
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
            </TabsList>

            {/* Upcoming Events */}
            <TabsContent value="upcoming" className="space-y-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl font-bold mb-4">Upcoming Events</h2>
                <p className="text-muted-foreground">Join us at our regular meetings and upcoming tournaments</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {upcomingEvents.map((event, index) => {
                  const eventImages = event.image_paths ? JSON.parse(event.image_paths) : [];
                  return (
                    <Card key={index} className="border-2 hover:border-scarlet transition-colors">
                      <CardContent className="p-8">
                        {eventImages.length > 0 && (
                          <ImageCarousel images={eventImages} alt={event.title} />
                        )}
                        <h3 className="font-serif text-2xl font-bold mb-4">{event.title}</h3>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span>{event.date}{event.time ? ` • ${event.time}` : ''}</span>
                          </div>
                          {event.location && (
                            <div className="flex items-center gap-3 text-muted-foreground">
                              <MapPin className="w-5 h-5 text-primary" />
                              <span>{event.location}</span>
                            </div>
                          )}
                        </div>
                        {event.description && <p className="text-muted-foreground mb-6">{event.description}</p>}
                        <div className="flex gap-3">
                          <Button
                            size="sm"
                            onClick={() => {}}
                            className="bg-scarlet text-white hover:bg-scarlet-600"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setEditingEvent(event);
                              setEditingEventType("upcoming");
                              setIsEditModalOpen(true);
                            }}
                          >
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Past Events */}
            <TabsContent value="past" className="space-y-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl font-bold mb-4">Past Events</h2>
                <p className="text-muted-foreground">Our tournament history and achievements</p>
              </div>

              <div className="space-y-8 max-w-4xl mx-auto">
                {pastEvents.map((event, index) => {
                  const eventImages = event.image_paths ? JSON.parse(event.image_paths) : [];
                  return (
                    <Card key={index} className="border-2 hover:border-scarlet transition-colors">
                      <CardContent className="p-8">
                        {eventImages.length > 0 && (
                          <ImageCarousel images={eventImages} alt={event.title} />
                        )}
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="font-serif text-2xl font-bold mb-2">{event.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-primary" />
                              {event.date}
                            </span>
                            <span className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-primary" />
                              {event.participants}
                            </span>
                            {event.rounds && (
                              <span className="flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-primary" />
                                {event.rounds}
                              </span>
                            )}
                            {event.rating && (
                              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                                {event.rating}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {event.winners && (
                        <div className="bg-secondary rounded-lg p-6 mb-6">
                          <h4 className="font-serif text-lg font-bold mb-4 flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-primary" />
                            Winners
                          </h4>
                          <div className="space-y-2">
                            {event.winners.map((winner, idx) => (
                              <div key={idx} className="flex justify-between items-center">
                                <span className="font-medium">{winner.place}: {winner.name}</span>
                                {winner.score && <span className="text-primary font-bold">{winner.score}</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                        {event.description && (
                          <p className="text-muted-foreground mb-6">{event.description}</p>
                        )}
                        <div className="flex gap-3">
                          <Button
                            size="sm"
                            onClick={() => {}}
                            className="bg-scarlet text-white hover:bg-scarlet-600"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setEditingEvent(event);
                              setEditingEventType("past");
                              setIsEditModalOpen(true);
                            }}
                          >
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Calendar */}
            <TabsContent value="calendar">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl font-bold mb-4">📅 Event Calendar</h2>
                <p className="text-muted-foreground">Color-coded events: 🟩 Meetings • 🟦 Tournaments • 🟨 Social Nights • 🟥 Deadlines</p>
              </div>

              <Card className="max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {meetingCalendarEvents.map((event, index) => {
                        const colorClass = event.color_code === 'green' ? 'bg-green-500/10 border-green-500/20' : 'bg-blue-500/10 border-blue-500/20';
                        const eventImages = event.image_paths ? JSON.parse(event.image_paths) : [];
                        return (
                          <div key={index} className={`${colorClass} border-2 rounded-lg p-6 hover:border-scarlet transition-colors`}>
                            {eventImages.length > 0 && (
                              <div className="mb-4">
                                <ImageCarousel images={eventImages} alt={event.title} />
                              </div>
                            )}
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-2xl">🟩</span>
                              <h3 className="font-serif text-xl font-bold">{event.title}</h3>
                            </div>
                            <p className="text-muted-foreground mb-2">{event.date}</p>
                            <p className="font-medium">{event.time}</p>
                            <p className="text-sm text-muted-foreground">{event.location}</p>
                            <p className="text-sm mt-3 mb-4 text-muted-foreground">{event.description}</p>
                            <div className="flex gap-3">
                              <Button
                                size="sm"
                                onClick={() => {}}
                                className="bg-scarlet text-white hover:bg-scarlet-600"
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  setEditingEvent(event);
                                  setEditingEventType("calendar");
                                  setIsEditModalOpen(true);
                                }}
                              >
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="font-serif text-lg font-bold mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        Subscribe to Calendar
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        Stay updated with all club events by subscribing to our calendar. Sync with Google Calendar, Apple Calendar, or your phone.
                      </p>
                      <Link to="/contact">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Subscribe to Calendar
                        </Button>
                      </Link>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="font-serif text-lg font-bold mb-4">Event Filters & Tags</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-block bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20 px-3 py-1 rounded-full text-sm">In-Person</span>
                        <span className="inline-block bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-sm">Rated</span>
                        <span className="inline-block bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border border-yellow-500/20 px-3 py-1 rounded-full text-sm">Beginner-Friendly</span>
                        <span className="inline-block bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-sm">Social Event</span>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="font-serif text-lg font-bold mb-4">Important Notes</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>No fees required to attend meetings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>No attendance obligation - come when you can</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Equipment provided (boards, pieces, clocks)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Free for all Rutgers students and staff</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Treat equipment and members with respect</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <CreateEventModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        onEventCreated={loadData}
      />

      {editingEvent && (
        <EditEventModal
          open={isEditModalOpen}
          onOpenChange={setIsEditModalOpen}
          onEventUpdated={loadData}
          eventType={editingEventType}
          event={editingEvent}
        />
      )}
    </div>
  );
};

export default Events;
