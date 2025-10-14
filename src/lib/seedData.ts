import { addUpcomingEvent, addPastEvent, addCalendarEvent, getUpcomingEvents } from './eventsService';

export const seedDatabase = async () => {
  try {
    const existing = getUpcomingEvents();
    if (existing.length > 0) {
      return;
    }

    addUpcomingEvent({
      title: "Weekly Meeting",
      date: "Every Tuesday",
      time: "7:00 PM - 9:00 PM",
      location: "Busch Student Center - Food Court",
      description: "Casual games, practice, and chess discussion",
      is_recurring: true,
      recurrence_pattern: "weekly_tuesday"
    });

    addUpcomingEvent({
      title: "Weekly Meeting",
      date: "Every Friday",
      time: "7:00 PM - 9:00 PM",
      location: "Busch Student Center - The Cove or Food Court",
      description: "Casual games, practice, and chess discussion",
      is_recurring: true,
      recurrence_pattern: "weekly_friday"
    });

    addPastEvent({
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
    });

    addPastEvent({
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
    });

    addPastEvent({
      title: "US Amateur Team East 2023",
      date: "February 2023",
      participants: "Team Event",
      description: "Rutgers Chess Club participated in this prestigious team tournament.",
    });

    addCalendarEvent({
      title: "Tuesday Meetings",
      date: "Every Tuesday",
      time: "7:00 PM - 9:00 PM",
      location: "Busch Student Center - Food Court",
      description: "Casual games, practice, and chess discussion",
      event_type: "meeting",
      color_code: "green",
      is_recurring: true,
      recurrence_pattern: "weekly_tuesday"
    });

    addCalendarEvent({
      title: "Friday Meetings",
      date: "Every Friday",
      time: "7:00 PM - 9:00 PM",
      location: "Busch Student Center - The Cove or Food Court",
      description: "Casual games, practice, and chess discussion",
      event_type: "meeting",
      color_code: "green",
      is_recurring: true,
      recurrence_pattern: "weekly_friday"
    });

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};
