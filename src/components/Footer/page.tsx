import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full mt-auto box-border bg-gradient-to-b from-[#0a0a14] to-[#05050f] border-t border-[#2a2a4a]">
      {/* Main Footer Content */}
      <div className="max-w-[1300px] mx-auto px-10 py-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[#f0f0ff] text-[1.3rem] tracking-widest font-[family-name:var(--font-orbitron)] mb-2">
              NexGen Esports
            </h2>
            <p className="text-[#a0a0cc] text-[0.95rem] leading-relaxed">
              Empowering gamers worldwide with competitive tournaments and community-driven events.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#1a1a2e] flex items-center justify-center text-[#a0a0cc] text-lg transition-all duration-300 hover:bg-cyan-400/20 hover:text-cyan-400" aria-label="Twitter">𝕏</a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#1a1a2e] flex items-center justify-center text-[#a0a0cc] text-lg transition-all duration-300 hover:bg-cyan-400/20 hover:text-cyan-400" aria-label="Discord">💬</a>
              <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#1a1a2e] flex items-center justify-center text-[#a0a0cc] text-lg transition-all duration-300 hover:bg-cyan-400/20 hover:text-cyan-400" aria-label="Twitch">📺</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-[#1a1a2e] flex items-center justify-center text-[#a0a0cc] text-lg transition-all duration-300 hover:bg-cyan-400/20 hover:text-cyan-400" aria-label="YouTube">▶️</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[#f0f0ff] text-[1rem] tracking-wider font-[family-name:var(--font-orbitron)] mb-1">
              Quick Links
            </h3>
            <Link to="/" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400 hover:pl-1">→ Home</Link>
            <Link to="/about" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400 hover:pl-1">→ About Us</Link>
            <Link to="/services" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400 hover:pl-1">→ Services</Link>
            <Link to="/leaderboard" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400 hover:pl-1">→ Leaderboard</Link>
            <Link to="/results" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400 hover:pl-1">→ Results</Link>
          </div>

          {/* Tournament */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[#f0f0ff] text-[1rem] tracking-wider font-[family-name:var(--font-orbitron)] mb-1">
              Tournament
            </h3>
            <Link to="/signup" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400 hover:pl-1">→ Register Team</Link>
            <Link to="/dashboard" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400 hover:pl-1">→ Dashboard</Link>
            <Link to="/profile" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400 hover:pl-1">→ My Profile</Link>
            <Link to="/reviews" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400 hover:pl-1">→ Reviews</Link>
            <Link to="/cart" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400 hover:pl-1">→ Cart</Link>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[#f0f0ff] text-[1rem] tracking-wider font-[family-name:var(--font-orbitron)] mb-1">
              Support
            </h3>
            <Link to="/contact" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400 hover:pl-1">→ Contact Us</Link>
            <a href="#faq" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400 hover:pl-1">→ FAQ</a>
            <a href="#help" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400 hover:pl-1">→ Help Center</a>
            <a href="#privacy" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400 hover:pl-1">→ Privacy Policy</a>
            <a href="#terms" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400 hover:pl-1">→ Terms of Service</a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-[#f0f0ff] text-[1rem] tracking-wider font-[family-name:var(--font-orbitron)] mb-1">
              Contact
            </h3>
            <div className="flex flex-col gap-2.5">
              <p className="text-[#a0a0cc] text-[0.95rem] m-0">📧</p>
              <a href="mailto:support@nexgenesports.com" className="text-[#a0a0cc] no-underline text-[0.95rem] transition-all duration-300 hover:text-cyan-400">support@nexgenesports.com</a>
              <p className="text-[#a0a0cc] text-[0.95rem] m-0 mt-2">📞</p>
              <p className="text-[#a0a0cc] text-[0.95rem] m-0">+1 (555) 123-4567</p>
              <p className="text-[#a0a0cc] text-[0.95rem] m-0 mt-2">📍</p>
              <p className="text-[#a0a0cc] text-[0.95rem] m-0 leading-relaxed">123 Gaming Street<br />San Francisco, CA 94102</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#2a2a4a]"></div>

      {/* Bottom Bar */}
      <div className="max-w-[1300px] mx-auto px-10 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#666688] text-[0.9rem] m-0">
            &copy; 2026 NexGen Gaming Tournaments. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-[#666688] text-[0.9rem] no-underline hover:text-cyan-400 transition-all">Privacy</a>
            <a href="#terms" className="text-[#666688] text-[0.9rem] no-underline hover:text-cyan-400 transition-all">Terms</a>
            <a href="#cookies" className="text-[#666688] text-[0.9rem] no-underline hover:text-cyan-400 transition-all">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
