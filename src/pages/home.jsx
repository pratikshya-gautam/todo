import { NavLink } from 'react-router';

export const links = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Reminder',
    link: '/reminder',
  },
  {
    name: 'Clock',
    link: '/clock',
  },
  {
    name: 'Movie Search',
    link: '/movie-search',
  },
];

export function Home() {
  return (
    <div>
      <div className="row column-gap-2 row-gap-2">
        {links.map((l) => (
          <div key={l.name} className="col-3">
            <div className="card">
              <div className="p-5">
                <h6>
                  <NavLink to={l.link}>{l.name}</NavLink>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
