import { useState } from 'react';

function NoteStyle({ isDone, note }) {
  if (!isDone) {
    return <span>{note}</span>;
  }
  return (
    <span>
      <del>{note}</del>
    </span>
  );
}

export function Reminder({
  reminders,
  addNote,
  markAsDone,
  removeReminder,
  updateReminder,
}) {
  const [note, setNote] = useState('');
  const [editing, setEditing] = useState(null);

  function handleChange(event) {
    setNote(event.target.value);
  }

  function handleClick() {
    if (editing !== null) {
      updateReminder(editing, note);
      setNote('');
      setEditing(null);
    } else {
      addNote(note);
      setNote('');
    }
  }

  function handleCheck(event, id) {
    markAsDone(id, event.target.checked);
  }

  function handleDelete(id) {
    removeReminder(id);
  }

  function handleEdit(reminder) {
    setNote(reminder.note);
    setEditing(reminder.id);
  }

  return (
    <div className="card p-3">
      <div className="text-center">
        <h2>Reminder</h2>
      </div>
      <div className="row mt-5 justify-content-center">
        <div className="col-6">
          <input
            value={note}
            type="text"
            className="form-control"
            placeholder="Enter new reminder"
            onChange={handleChange}
          />
        </div>
        <div className="col-2">
          <button onClick={handleClick} className="btn btn-primary ">
            {editing ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
      <div className="p-5">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>items</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reminders.map((r) => (
              <tr key={r.note}>
                <td>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={r.isDone}
                    onClick={(event) => handleCheck(event, r.id)}
                  />
                </td>
                <td>
                  <NoteStyle isDone={r.isDone} note={r.note} />
                </td>
                <td>
                  <i
                    onClick={() => handleDelete(r.id)}
                    className="bi bi-archive-fill"
                  ></i>
                  <i
                    className="bi bi-pencil-square"
                    style={{ marginLeft: '10px' }}
                    onClick={() => handleEdit(r)}
                  ></i>
                </td>
                {console.log(r.mohan)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
