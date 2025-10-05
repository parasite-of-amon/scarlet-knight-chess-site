import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";

const Events = () => {
  const pastEvents = [
    {
      title: "Spring 2023 Blitz Tournament",
      date: "May 7, 2023",
      participants: "18 participants",
      rounds: "5 rounds",
      rating: "USCF Rated",
      winners: [
        { place: "1st", name: "Ansh Shah", score: "5-0" },
        { place: "2nd", name: "Joaquin Carlson", score: "4-1" },
        { place: "3rd", name: "Jouan Yu", score: "3.5-1.5" },
      ],
    },
    {
      title: "Fall 2023 Blitz Tournament",
      date: "November 11, 2023",
      participants: "16 participants",
      rounds: "7 rounds",
      rating: "USCF Rated",
      winners: [
        { place: "1st", name: "Aravind Kumar", score: "7-0" },
        { place: "2nd (tie)", name: "Lev Zilbermintz & Ansh Shah", score: "5-2" },
        { place: "3rd", name: "Jatin Thakkar", score: "4.5-2.5" },
        { place: "Unrated Winner", name: "Joe", score: "" },
      ],
    },
    {
      title: "US Amateur Team East 2023",
      date: "February 2023",
      participants: "Team Event",
      description: "Rutgers Chess Club participated in this prestigious team tournament.",
    },
  ];

  const upcomingEvents = [
    {
      title: "Weekly Meeting",
      date: "Every Tuesday",
      time: "7:00 PM - 9:00 PM",
      location: "Busch Student Center - Food Court",
      description: "Casual games, practice, and chess discussion",
    },
    {
      title: "Weekly Meeting",
      date: "Every Friday",
      time: "7:00 PM - 9:00 PM",
      location: "Busch Student Center - The Cove or Food Court",
      description: "Casual games, practice, and chess discussion",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-32 bg-dark-bg text-dark-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/95 to-dark-bg/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=1200')",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Events</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="/" className="hover:text-primary">Home</a>
            <span>/</span>
            <span className="text-primary">Events</span>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
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
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="p-8">
                      <h3 className="font-serif text-2xl font-bold mb-4">{event.title}</h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span>{event.date} • {event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <MapPin className="w-5 h-5 text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6">{event.description}</p>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Past Events */}
            <TabsContent value="past" className="space-y-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl font-bold mb-4">Past Events</h2>
                <p className="text-muted-foreground">Our tournament history and achievements</p>
              </div>

              <div className="space-y-8 max-w-4xl mx-auto">
                {pastEvents.map((event, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="p-8">
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
                        <div className="bg-secondary rounded-lg p-6">
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
                        <p className="text-muted-foreground mt-4">{event.description}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
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
                      <div className="bg-green-500/10 border-2 border-green-500/20 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl">🟩</span>
                          <h3 className="font-serif text-xl font-bold">Tuesday Meetings</h3>
                        </div>
                        <p className="text-muted-foreground mb-2">Every Tuesday</p>
                        <p className="font-medium">7:00 PM - 9:00 PM</p>
                        <p className="text-sm text-muted-foreground">Busch Student Center - Food Court</p>
                        <p className="text-sm mt-3 text-muted-foreground">Casual games, practice, and chess discussion</p>
                      </div>

                      <div className="bg-green-500/10 border-2 border-green-500/20 rounded-lg p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl">🟩</span>
                          <h3 className="font-serif text-xl font-bold">Friday Meetings</h3>
                        </div>
                        <p className="text-muted-foreground mb-2">Every Friday</p>
                        <p className="font-medium">7:00 PM - 9:00 PM</p>
                        <p className="text-sm text-muted-foreground">Busch Student Center - The Cove or Food Court</p>
                        <p className="text-sm mt-3 text-muted-foreground">Casual games, practice, and chess discussion</p>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="font-serif text-lg font-bold mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        Subscribe to Calendar
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        Stay updated with all club events by subscribing to our calendar. Sync with Google Calendar, Apple Calendar, or your phone.
                      </p>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Subscribe to Calendar
                      </Button>
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
    </div>
  );
};

export default Events;
