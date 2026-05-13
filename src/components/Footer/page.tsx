import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="w-full mt-auto box-border pt-[70px] px-10 pb-8 bg-gradient-to-b from-[#0a0a14] to-[#05050f] border-t border-[#2a2a4a]"
    >
      {/* Footer columns */}
      <div className="flex flex-wrap justify-around gap-10 max-w-[1300px] mx-auto">
        {/* Brand */}
        <div className="flex flex-col gap-3.5 min-w-[200px]">
          <h2 className="text-[#f0f0ff] mb-1.5 text-[1.1rem] tracking-widest font-[family-name:var(--font-orbitron)]">
            NexGen Esports
          </h2>
          <p className="text-[#666688] text-[0.95rem] m-0">Empowering gamers worldwide.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3.5 min-w-[200px]">
          <h2 className="text-[#f0f0ff] mb-1.5 text-[1.1rem] tracking-widest font-[family-name:var(--font-orbitron)]">
            Quick Links
          </h2>
          <Link to="/signup"      className="text-[#a0a0cc] no-underline text-base transition-all duration-300 hover:text-cyan-400 hover:pl-1">Register Team</Link>
          <Link to="/leaderboard" className="text-[#a0a0cc] no-underline text-base transition-all duration-300 hover:text-cyan-400 hover:pl-1">Leaderboards</Link>
          <Link to="/results"     className="text-[#a0a0cc] no-underline text-base transition-all duration-300 hover:text-cyan-400 hover:pl-1">Results</Link>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3.5 min-w-[200px]">
          <h2 className="text-[#f0f0ff] mb-1.5 text-[1.1rem] tracking-widest font-[family-name:var(--font-orbitron)]">
            Support
          </h2>
          <Link to="/contact" className="text-[#a0a0cc] no-underline text-base transition-all duration-300 hover:text-cyan-400 hover:pl-1">Contact Us</Link>
          <Link to="#"        className="text-[#a0a0cc] no-underline text-base transition-all duration-300 hover:text-cyan-400 hover:pl-1">FAQ</Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-center w-full mt-[50px] pt-7 border-t border-[#2a2a4a]">
        <p className="text-[#666688] text-[0.95rem] m-0">
          &copy; 2024 NexGen Gaming Tournaments. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
