import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Overview', path: '/' },
  { label: 'Portfolio', path: '/portfolio' }
];

export default function NavBar() {
  return (
    <header className="nav">
      <div className="logo">Sunny Mendapara</div>
      <nav>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
