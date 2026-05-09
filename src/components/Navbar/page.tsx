import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <NavLink to="/" onClick={() => setMenuOpen(false)}>
        NexGen Esports
      </NavLink>

      <button
        className="menu-toggle"
        aria-label="Toggle Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => setMenuOpen(false)}
          >
            Register Team
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/leaderboard"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => setMenuOpen(false)}
          >
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/results"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => setMenuOpen(false)}
          >
            Match Results
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
