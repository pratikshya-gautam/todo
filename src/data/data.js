import { v4 as uuid } from 'uuid';
export const defaultReminder = [
  {
    id: uuid(),
    isDone: false,
    note: 'Learn React',
  },
  {
    id: uuid(),
    isDone: true,
    note: 'Learn HTML',
  },
];
