import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/signup', label: 'Register Team' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/results', label: 'Match Results' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2.5 font-medium text-[0.95rem] rounded-lg no-underline tracking-wide transition-all duration-300 ${
      isActive
        ? 'text-cyan-400 bg-cyan-400/10'
        : 'text-[#f0f0ff] hover:text-cyan-400 hover:bg-cyan-400/[0.08]'
    }`;

  return (
    <nav
      className="flex justify-between items-center sticky top-0 z-[100] px-[50px] py-5 bg-[rgba(10,10,20,0.9)] backdrop-blur-[20px] border-b border-[#2a2a4a] shadow-[0_4px_40px_rgba(0,0,0,0.5)]"
    >
      {/* Logo */}
      <NavLink
        to="/"
        onClick={() => setMenuOpen(false)}
        className="flex items-center font-black text-[1.6rem] no-underline tracking-widest font-[family-name:var(--font-orbitron)] bg-gradient-to-br from-cyan-400 to-violet-600 bg-clip-text text-transparent"
      >
        NexGen Esports
      </NavLink>

      {/* Hamburger */}
      <button
        aria-label="Toggle Menu"
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2 shadow-none"
      >
        <span className="w-7 h-[3px] block rounded-sm bg-[#f0f0ff] transition-all duration-300" />
        <span className="w-7 h-[3px] block rounded-sm bg-[#f0f0ff] transition-all duration-300" />
        <span className="w-7 h-[3px] block rounded-sm bg-[#f0f0ff] transition-all duration-300" />
      </button>

      {/* Desktop nav */}
      <ul className="hidden md:flex list-none m-0 p-0 items-center gap-1.5">
        {links.map(({ to, label, end }) => (
          <li key={to} className="relative flex">
            <NavLink to={to} end={end} className={linkClass} onClick={() => setMenuOpen(false)}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile nav */}
      {menuOpen && (
        <ul
          className="md:hidden flex flex-col absolute top-full left-0 w-full py-4 z-20 list-none m-0 p-0 bg-[rgba(10,10,20,0.98)] backdrop-blur-[20px] border-b border-[#2a2a4a]"
        >
          {links.map(({ to, label, end }) => (
            <li key={to} className="w-full flex justify-center">
              <NavLink
                to={to}
                end={end}
                className={(state) => `${linkClass(state)} w-full text-center !p-4`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
