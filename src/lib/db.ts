import initSqlJs, { Database } from 'sql.js';

let db: Database | null = null;

export const initDatabase = async (): Promise<Database> => {
  if (db) return db;

  const SQL = await initSqlJs({
    locateFile: (file) => `/${file}`
  });

  const savedDb = localStorage.getItem('eventsDatabase');

  if (savedDb) {
    const uint8Array = new Uint8Array(JSON.parse(savedDb));
    db = new SQL.Database(uint8Array);
  } else {
    db = new SQL.Database();

    db.run(`
      CREATE TABLE IF NOT EXISTS upcoming_events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        date TEXT NOT NULL,
        time TEXT,
        location TEXT,
        description TEXT,
        image_paths TEXT,
        is_recurring INTEGER DEFAULT 0,
        recurrence_pattern TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS past_events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        date TEXT NOT NULL,
        participants TEXT,
        rounds TEXT,
        rating TEXT,
        description TEXT,
        image_paths TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS past_event_winners (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        past_event_id INTEGER NOT NULL,
        place TEXT NOT NULL,
        name TEXT NOT NULL,
        score TEXT,
        FOREIGN KEY (past_event_id) REFERENCES past_events(id) ON DELETE CASCADE
      );

      CREATE TABLE IF NOT EXISTS calendar_events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        date TEXT NOT NULL,
        time TEXT,
        location TEXT,
        description TEXT,
        event_type TEXT DEFAULT 'meeting',
        color_code TEXT DEFAULT 'green',
        image_paths TEXT,
        is_recurring INTEGER DEFAULT 0,
        recurrence_pattern TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP
      );

      CREATE INDEX IF NOT EXISTS idx_upcoming_events_date ON upcoming_events(date);
      CREATE INDEX IF NOT EXISTS idx_past_events_date ON past_events(date);
      CREATE INDEX IF NOT EXISTS idx_calendar_events_date ON calendar_events(date);
      CREATE INDEX IF NOT EXISTS idx_calendar_events_type ON calendar_events(event_type);
      CREATE INDEX IF NOT EXISTS idx_past_event_winners_event_id ON past_event_winners(past_event_id);
    `);

    saveDatabase();
  }

  return db;
};

export const saveDatabase = () => {
  if (!db) return;
  const data = db.export();
  const buffer = Array.from(data);
  localStorage.setItem('eventsDatabase', JSON.stringify(buffer));
};

export const getDatabase = (): Database => {
  if (!db) {
    throw new Error('Database not initialized. Call initDatabase() first.');
  }
  return db;
};

export default { initDatabase, saveDatabase, getDatabase };
