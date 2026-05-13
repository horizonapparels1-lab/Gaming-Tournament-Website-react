import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page';
import Login from './pages/Login/page';
import Signup from './pages/Signup/page';
import Dashboard from './pages/Dashboard/page';
import Leaderboard from './pages/Leaderboard/page';
import Results from './pages/Results/page';
import Services from './pages/Services/page';
import Contact from './pages/Contact/page';

/* ── Reusable primitives ─────────────────────────────────── */

/** Full-width page wrapper */
function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 flex flex-col items-center w-full max-w-[1300px] mx-auto px-10 py-[70px] box-border">
      {children}
    </main>
  );
}

/** Gradient stat number */
function StatNumber({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-black text-5xl leading-none"
      style={{
        fontFamily: "'Orbitron', sans-serif",
        background: 'linear-gradient(135deg, #22d3ee, #7c3aed)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}
    >
      {children}
    </span>
  );
}

/** Section heading with underline bar */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="section-title-underline text-center text-[2rem] mb-2.5 tracking-wide"
      style={{ fontFamily: "'Orbitron', sans-serif" }}
    >
      {children}
    </h2>
  );
}

/** Tournament card */
function TournamentCard({
  img, alt, title, desc, to, linkLabel,
}: {
  img: string; alt: string; title: string; desc: string; to: string; linkLabel: string;
}) {
  return (
    <div
      className="card-glow flex flex-col rounded-2xl p-7 w-[340px] transition-all duration-300 hover:-translate-y-2.5"
      style={{
        background: 'linear-gradient(145deg, #111127, #0d0d22)',
        border: '1px solid #2a2a4a',
        boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(34,211,238,0.4)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(34,211,238,0.4)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = '#2a2a4a';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.4)';
      }}
    >
      <img src={img} alt={alt} className="w-full h-[220px] object-cover rounded-lg mb-5" />
      <h3 className="mb-3 text-[1.25rem] tracking-wide text-[#f0f0ff]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        {title}
      </h3>
      <p className="leading-relaxed text-[1.05rem] text-[#a0a0cc]">{desc}</p>
      <Link
        to={to}
        className="mt-auto self-start py-1 text-base font-bold no-underline flex items-center gap-1.5 text-cyan-400 transition-all duration-300 hover:text-white hover:gap-3"
        style={{ background: 'none' }}
      >
        {linkLabel}
      </Link>
    </div>
  );
}

/** Feature card */
function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div
      className="flex flex-col items-center text-center gap-4 p-9 w-[280px] rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
      style={{
        background: '#111127',
        border: '1px solid #2a2a4a',
      }}
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
  );
}

/** Upcoming tournament row */
function UpcomingItem({
  game, date, prize, badge, badgeTo,
}: {
  game: string; date: string; prize: string; badge: string; badgeTo?: string;
}) {
  return (
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
      <span className="font-bold text-[1.05rem] text-[#f0f0ff]" style={{ fontFamily: "'Orbitron', sans-serif" }}>{game}</span>
      <span className="text-[0.95rem] font-semibold text-cyan-400">{date}</span>
      <span className="text-[0.95rem] font-bold text-amber-400">{prize}</span>
      {badgeTo ? (
        <Link
          to={badgeTo}
          className="rounded-full px-3.5 py-1 text-[0.8rem] font-bold tracking-wide text-white no-underline"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #9333ea)' }}
        >
          {badge}
        </Link>
      ) : (
        <span
          className="rounded-full px-3.5 py-1 text-[0.8rem] font-bold tracking-wide text-white"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #9333ea)' }}
        >
          {badge}
        </span>
      )}
    </div>
  );
}

/* ── Home page ───────────────────────────────────────────── */
function Home() {
  return (
    <Page>
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
        Welcome to NexGen Tournaments
      </h1>

      <p className="animate-[fadeInUp_0.8s_ease_0.2s_forwards] opacity-0 text-center max-w-[800px] mx-auto mb-[60px] text-[1.25rem] text-[#a0a0cc] leading-relaxed">
        Join the most competitive and thrilling esports tournaments around the globe.
        Compete, win prizes, and make a name for your team.
      </p>

      {/* Stats */}
      <div
        className="flex flex-wrap justify-center gap-7 w-full my-[60px] px-10 py-[50px] rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(34,211,238,0.05))',
          border: '1px solid #2a2a4a',
        }}
      >
        {[
          { num: '1,200+', label: 'Teams Registered' },
          { num: '48',     label: 'Tournaments Hosted' },
          { num: '$500K',  label: 'Total Prize Pool' },
          { num: '32',     label: 'Countries Represented' },
        ].map(({ num, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 min-w-[150px]">
            <StatNumber>{num}</StatNumber>
            <span className="text-base text-[#a0a0cc] text-center tracking-wide">{label}</span>
          </div>
        ))}
      </div>

      {/* Featured Tournaments */}
      <SectionTitle>Featured Tournaments</SectionTitle>

      <div className="flex flex-wrap justify-center gap-7 w-full my-[50px] mx-3">
        <TournamentCard
          img="/images/image1.jpg" alt="Valorant Masters 2024"
          title="Valorant Masters 2024"
          desc="A 5v5 tactical shooter tournament with a prize pool of $50,000. Registrations open now."
          to="/signup" linkLabel="Register Now →"
        />
        <TournamentCard
          img="/images/image2.jpg" alt="Apex Legends Championship"
          title="Apex Legends Championship"
          desc="Battle Royale trio tournament. Show your skills and dominate the outlands."
          to="/signup" linkLabel="Register Now →"
        />
        <TournamentCard
          img="/images/image3.jpg" alt="CS2 Major Invitational"
          title="CS2 Major Invitational"
          desc="The ultimate test of precision and teamwork. Invite-only teams."
          to="/leaderboard" linkLabel="View Leaderboard →"
        />
      </div>

      {/* Features */}
      <div className="w-full my-5 mb-[60px]">
        <h2
          className="text-center text-[2rem] mb-10 text-[#f0f0ff]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Why Join NexGen?
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          <FeatureCard icon="🏆" title="Massive Prize Pools"  desc="Compete for life-changing prize pools across every major esports title with guaranteed payouts." />
          <FeatureCard icon="🌍" title="Global Competition"   desc="Face off against the best teams from over 32 countries in international bracket play." />
          <FeatureCard icon="📡" title="Live Broadcasts"      desc="Every match is streamed live with professional commentary and real-time stats." />
          <FeatureCard icon="⚡" title="Instant Rankings"     desc="Our live leaderboard updates after every match so standings are always accurate." />
        </div>
      </div>

      {/* Upcoming Tournaments */}
      <div className="w-full my-5 mb-[60px]">
        <h2
          className="text-center text-[2rem] mb-10 text-[#f0f0ff]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Upcoming Tournaments
        </h2>
        <div className="flex flex-col gap-4 w-full max-w-[900px] mx-auto">
          <UpcomingItem game="Valorant Masters 2024"    date="June 15, 2024"      prize="$50,000"  badge="Open" />
          <UpcomingItem game="Apex Legends Championship" date="July 3, 2024"      prize="$30,000"  badge="Open" />
          <UpcomingItem game="CS2 Major Invitational"   date="August 20, 2024"    prize="$100,000" badge="Invite Only" />
          <UpcomingItem game="Rocket League Cup"        date="September 5, 2024"  prize="$20,000"  badge="Open" />
        </div>
      </div>
    </Page>
  );
}

/* ── App ─────────────────────────────────────────────────── */
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/login"       element={<Login />} />
        <Route path="/signup"      element={<Signup />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/results"     element={<Results />} />
        <Route path="/dashboard"   element={<Dashboard />} />
        <Route path="/services"    element={<Services />} />
        <Route path="/contact"     element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
