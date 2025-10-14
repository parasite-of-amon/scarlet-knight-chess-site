import { getDatabase, saveDatabase } from './db';

export interface UpcomingEvent {
  id?: number;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description?: string;
  image_paths?: string;
  is_recurring?: boolean;
  recurrence_pattern?: string;
}

export interface PastEvent {
  id?: number;
  title: string;
  date: string;
  participants?: string;
  rounds?: string;
  rating?: string;
  description?: string;
  image_paths?: string;
  winners?: Winner[];
}

export interface Winner {
  id?: number;
  past_event_id?: number;
  place: string;
  name: string;
  score?: string;
}

export interface CalendarEvent {
  id?: number;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description?: string;
  event_type?: 'meeting' | 'tournament' | 'social' | 'deadline';
  color_code?: string;
  image_paths?: string;
  is_recurring?: boolean;
  recurrence_pattern?: string;
}

export const getUpcomingEvents = (): UpcomingEvent[] => {
  const db = getDatabase();
  const result = db.exec('SELECT * FROM upcoming_events ORDER BY date ASC');

  if (result.length === 0) return [];

  const columns = result[0].columns;
  const values = result[0].values;

  return values.map((row) => {
    const event: any = {};
    columns.forEach((col, idx) => {
      event[col] = row[idx];
    });
    event.is_recurring = Boolean(event.is_recurring);
    return event as UpcomingEvent;
  });
};

export const getPastEvents = (): PastEvent[] => {
  const db = getDatabase();
  const eventsResult = db.exec('SELECT * FROM past_events ORDER BY date DESC');

  if (eventsResult.length === 0) return [];

  const columns = eventsResult[0].columns;
  const values = eventsResult[0].values;

  const events = values.map((row) => {
    const event: any = {};
    columns.forEach((col, idx) => {
      event[col] = row[idx];
    });
    return event as PastEvent;
  });

  events.forEach((event) => {
    const winnersResult = db.exec(
      'SELECT * FROM past_event_winners WHERE past_event_id = ? ORDER BY id ASC',
      [event.id!]
    );

    if (winnersResult.length > 0) {
      const winnerColumns = winnersResult[0].columns;
      const winnerValues = winnersResult[0].values;

      event.winners = winnerValues.map((row) => {
        const winner: any = {};
        winnerColumns.forEach((col, idx) => {
          winner[col] = row[idx];
        });
        return winner as Winner;
      });
    } else {
      event.winners = [];
    }
  });

  return events;
};

export const getCalendarEvents = (): CalendarEvent[] => {
  const db = getDatabase();
  const result = db.exec('SELECT * FROM calendar_events ORDER BY date ASC');

  if (result.length === 0) return [];

  const columns = result[0].columns;
  const values = result[0].values;

  return values.map((row) => {
    const event: any = {};
    columns.forEach((col, idx) => {
      event[col] = row[idx];
    });
    event.is_recurring = Boolean(event.is_recurring);
    return event as CalendarEvent;
  });
};

export const addUpcomingEvent = (event: UpcomingEvent): void => {
  const db = getDatabase();
  db.run(
    `INSERT INTO upcoming_events (title, date, time, location, description, image_paths, is_recurring, recurrence_pattern)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      event.title,
      event.date,
      event.time || null,
      event.location || null,
      event.description || null,
      event.image_paths || null,
      event.is_recurring ? 1 : 0,
      event.recurrence_pattern || null
    ]
  );
  saveDatabase();
};

export const addPastEvent = (event: PastEvent): void => {
  const db = getDatabase();
  db.run(
    `INSERT INTO past_events (title, date, participants, rounds, rating, description, image_paths)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      event.title,
      event.date,
      event.participants || null,
      event.rounds || null,
      event.rating || null,
      event.description || null,
      event.image_paths || null
    ]
  );

  const result = db.exec('SELECT last_insert_rowid() as id');
  const eventId = result[0].values[0][0] as number;

  if (event.winners && event.winners.length > 0) {
    for (const winner of event.winners) {
      db.run(
        `INSERT INTO past_event_winners (past_event_id, place, name, score)
         VALUES (?, ?, ?, ?)`,
        [eventId, winner.place, winner.name, winner.score || null]
      );
    }
  }

  saveDatabase();
};

export const addCalendarEvent = (event: CalendarEvent): void => {
  const db = getDatabase();
  db.run(
    `INSERT INTO calendar_events (title, date, time, location, description, event_type, color_code, image_paths, is_recurring, recurrence_pattern)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      event.title,
      event.date,
      event.time || null,
      event.location || null,
      event.description || null,
      event.event_type || 'meeting',
      event.color_code || 'green',
      event.image_paths || null,
      event.is_recurring ? 1 : 0,
      event.recurrence_pattern || null
    ]
  );
  saveDatabase();
};

export const deleteUpcomingEvent = (id: number): void => {
  const db = getDatabase();
  db.run('DELETE FROM upcoming_events WHERE id = ?', [id]);
  saveDatabase();
};

export const deletePastEvent = (id: number): void => {
  const db = getDatabase();
  db.run('DELETE FROM past_events WHERE id = ?', [id]);
  saveDatabase();
};

export const deleteCalendarEvent = (id: number): void => {
  const db = getDatabase();
  db.run('DELETE FROM calendar_events WHERE id = ?', [id]);
  saveDatabase();
};

export const updateUpcomingEvent = (id: number, event: Partial<UpcomingEvent>): void => {
  const fields = [];
  const values = [];

  if (event.title !== undefined) {
    fields.push('title = ?');
    values.push(event.title);
  }
  if (event.date !== undefined) {
    fields.push('date = ?');
    values.push(event.date);
  }
  if (event.time !== undefined) {
    fields.push('time = ?');
    values.push(event.time || null);
  }
  if (event.location !== undefined) {
    fields.push('location = ?');
    values.push(event.location || null);
  }
  if (event.description !== undefined) {
    fields.push('description = ?');
    values.push(event.description || null);
  }
  if (event.image_paths !== undefined) {
    fields.push('image_paths = ?');
    values.push(event.image_paths || null);
  }
  if (event.is_recurring !== undefined) {
    fields.push('is_recurring = ?');
    values.push(event.is_recurring ? 1 : 0);
  }
  if (event.recurrence_pattern !== undefined) {
    fields.push('recurrence_pattern = ?');
    values.push(event.recurrence_pattern || null);
  }

  if (fields.length === 0) return;

  fields.push('updated_at = CURRENT_TIMESTAMP');
  values.push(id);

  const db = getDatabase();
  db.run(`UPDATE upcoming_events SET ${fields.join(', ')} WHERE id = ?`, values);
  saveDatabase();
};

export const updatePastEvent = (id: number, event: Partial<PastEvent>): void => {
  const db = getDatabase();
  const fields = [];
  const values = [];

  if (event.title !== undefined) {
    fields.push('title = ?');
    values.push(event.title);
  }
  if (event.date !== undefined) {
    fields.push('date = ?');
    values.push(event.date);
  }
  if (event.participants !== undefined) {
    fields.push('participants = ?');
    values.push(event.participants || null);
  }
  if (event.rounds !== undefined) {
    fields.push('rounds = ?');
    values.push(event.rounds || null);
  }
  if (event.rating !== undefined) {
    fields.push('rating = ?');
    values.push(event.rating || null);
  }
  if (event.description !== undefined) {
    fields.push('description = ?');
    values.push(event.description || null);
  }
  if (event.image_paths !== undefined) {
    fields.push('image_paths = ?');
    values.push(event.image_paths || null);
  }

  if (fields.length > 0) {
    fields.push('updated_at = CURRENT_TIMESTAMP');
    values.push(id);
    db.run(`UPDATE past_events SET ${fields.join(', ')} WHERE id = ?`, values);
  }

  if (event.winners !== undefined) {
    db.run('DELETE FROM past_event_winners WHERE past_event_id = ?', [id]);

    if (event.winners.length > 0) {
      for (const winner of event.winners) {
        db.run(
          `INSERT INTO past_event_winners (past_event_id, place, name, score)
           VALUES (?, ?, ?, ?)`,
          [id, winner.place, winner.name, winner.score || null]
        );
      }
    }
  }

  saveDatabase();
};

export const updateCalendarEvent = (id: number, event: Partial<CalendarEvent>): void => {
  const fields = [];
  const values = [];

  if (event.title !== undefined) {
    fields.push('title = ?');
    values.push(event.title);
  }
  if (event.date !== undefined) {
    fields.push('date = ?');
    values.push(event.date);
  }
  if (event.time !== undefined) {
    fields.push('time = ?');
    values.push(event.time || null);
  }
  if (event.location !== undefined) {
    fields.push('location = ?');
    values.push(event.location || null);
  }
  if (event.description !== undefined) {
    fields.push('description = ?');
    values.push(event.description || null);
  }
  if (event.event_type !== undefined) {
    fields.push('event_type = ?');
    values.push(event.event_type || 'meeting');
  }
  if (event.color_code !== undefined) {
    fields.push('color_code = ?');
    values.push(event.color_code || 'green');
  }
  if (event.image_paths !== undefined) {
    fields.push('image_paths = ?');
    values.push(event.image_paths || null);
  }
  if (event.is_recurring !== undefined) {
    fields.push('is_recurring = ?');
    values.push(event.is_recurring ? 1 : 0);
  }
  if (event.recurrence_pattern !== undefined) {
    fields.push('recurrence_pattern = ?');
    values.push(event.recurrence_pattern || null);
  }

  if (fields.length === 0) return;

  fields.push('updated_at = CURRENT_TIMESTAMP');
  values.push(id);

  const db = getDatabase();
  db.run(`UPDATE calendar_events SET ${fields.join(', ')} WHERE id = ?`, values);
  saveDatabase();
};
