import { Link } from 'react-router-dom';

const services = [
  { icon: '🏟️', title: 'Tournament Hosting',  desc: 'End-to-end tournament organization from brackets and scheduling to results and prize distribution.' },
  { icon: '📡', title: 'Live Broadcasting',    desc: 'Professional-grade live streaming with commentary, overlays, and real-time analytics for every match.' },
  { icon: '📊', title: 'Analytics & Stats',    desc: 'Advanced performance dashboards and stat tracking across all major esports titles.' },
  { icon: '🎓', title: 'Team Development',     desc: 'Coaching programs, scrim networks, and mentorship to help teams level up their competitive play.' },
  { icon: '🛡️', title: 'Anti-Cheat Systems',  desc: 'Robust fair play enforcement with automated detection and human review for all competitive matches.' },
  { icon: '🌐', title: 'Global Network',       desc: 'Low-latency servers across 15+ regions ensuring fair competition for teams around the world.' },
];

export default function Services() {
  return (
    <main className="flex-1 flex flex-col items-center w-full max-w-[1300px] mx-auto px-10 py-[70px] box-border">
      {/* Hero */}
      <h1
        className="animate-[fadeInDown_0.8s_ease_forwards] text-center text-[4.5rem] mb-5 font-black tracking-widest leading-tight"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          background: 'linear-gradient(135deg, #f0f0ff 0%, #22d3ee 50%, #7c3aed 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Our Services
      </h1>

      <p className="animate-[fadeInUp_0.8s_ease_0.2s_forwards] opacity-0 text-center max-w-[800px] mx-auto mb-[60px] text-[1.25rem] text-[#a0a0cc] leading-relaxed">
        NexGen provides world-class tournament infrastructure, broadcasting, and competitive gaming services
        for teams and organizations worldwide.
      </p>

      {/* Services Grid */}
      <div className="w-full my-5 mb-[60px]">
        <h2
          className="text-center text-[2rem] mb-10 text-[#f0f0ff]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          What We Offer
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {services.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-4 p-9 w-[280px] rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
              style={{ background: '#111127', border: '1px solid #2a2a4a' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#22d3ee';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px rgba(34,211,238,0.4)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = '#2a2a4a';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <span className="text-[2.8rem] leading-none">{icon}</span>
              <h3 className="text-[1.15rem] m-0 text-[#f0f0ff]" style={{ fontFamily: "'Orbitron', sans-serif" }}>{title}</h3>
              <p className="m-0 text-[0.95rem] text-[#a0a0cc]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="w-full my-5 mb-[60px]">
        <h2
          className="text-center text-[2rem] mb-10 text-[#f0f0ff]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Ready to Compete?
        </h2>
        <div className="flex flex-col gap-4 w-full max-w-[900px] mx-auto">
          <div
            className="flex items-center justify-between flex-wrap gap-4 rounded-2xl px-[30px] py-6 transition-all duration-300"
            style={{ background: '#111127', border: '1px solid #2a2a4a' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = '#7c3aed';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px rgba(124,58,237,0.5)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = '#2a2a4a';
              (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
            }}
          >
            <span className="font-bold text-[1.05rem] text-[#f0f0ff]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Register Your Team
            </span>
            <span className="text-[0.95rem] font-semibold text-cyan-400">Open Registrations Now</span>
            <span className="text-[0.95rem] font-bold text-amber-400">$500K+ Prize Pool</span>
            <Link
              to="/signup"
              className="rounded-full px-3.5 py-1 text-[0.8rem] font-bold tracking-wide text-white no-underline"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #9333ea)' }}
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
