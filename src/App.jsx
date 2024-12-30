import { useState } from 'react';
import { defaultReminder } from './data/data';
import { Reminder } from './pages/reminder';
import { v4 as uuid } from 'uuid';
import { Clock } from './pages/clock';
import { Routes, Route, useNavigate } from 'react-router';
import { Navbar } from './layout/navbar';
import { Home } from './pages/home';
import { SearchMovie } from './pages/search-movie';

export function App() {
  const [reminders, setReminders] = useState(defaultReminder);
  const navigate = useNavigate();

  function addReminder(note) {
    const newReminder = {
      id: uuid(),
      isDone: false,
      note: note,
    };
    const newList = [...reminders, newReminder];
    setReminders(newList);
  }

  function markReminderAsDone(id, isDone) {
    const newReminder = reminders.map((r) => {
      if (r.id === id) {
        r.isDone = isDone;
        return r;
      }
      return r;
    });
    setReminders(newReminder);
  }

  function removeReminder(id) {
    const newReminder = reminders.filter((r) => {
      if (r.id === id) {
        return false;
      }
      return true;
    });

    setReminders(newReminder);
  }

  function updateReminder(id, note) {
    const newReminder = reminders.map((r) => {
      if (r.id === id) {
        r.note = note;
        return r;
      }
      return r;
    });

    setReminders(newReminder);
  }

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => navigate(-1)} className="btn btn-link">
          Back
        </button>
      </div>

      <div className="container mt-5">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
            path="/reminder"
            element={
              <Reminder
                reminders={reminders}
                addNote={addReminder}
                markAsDone={markReminderAsDone}
                removeReminder={removeReminder}
                updateReminder={updateReminder}
              />
            }
          />
          <Route
            path="/clock"
            element={
              <div className="card mt-5">
                <Clock />
              </div>
            }
          />
          <Route path="/movie-search" element={<SearchMovie />} />
        </Routes>
      </div>
    </>
  );
}
