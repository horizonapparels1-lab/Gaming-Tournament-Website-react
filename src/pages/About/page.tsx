export default function About() {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      image: 'https://i.pravatar.cc/300?img=12',
      bio: 'Esports veteran with 10+ years of tournament organization experience.',
    },
    {
      name: 'Sarah Martinez',
      role: 'Head of Operations',
      image: 'https://i.pravatar.cc/300?img=45',
      bio: 'Expert in logistics and event management for global gaming events.',
    },
    {
      name: 'James Wilson',
      role: 'Lead Developer',
      image: 'https://i.pravatar.cc/300?img=33',
      bio: 'Full-stack developer specializing in real-time tournament platforms.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Manager',
      image: 'https://i.pravatar.cc/300?img=47',
      bio: 'Building and nurturing our global gaming community since day one.',
    },
  ];

  return (
    <main className="flex-1 flex flex-col items-center w-full max-w-[1300px] mx-auto px-10 py-[70px] box-border">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1
          className="text-[3.5rem] mb-5 font-black tracking-widest leading-tight"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            background: 'linear-gradient(135deg, #f0f0ff 0%, #22d3ee 50%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          About NexGen Esports
        </h1>
        <p className="text-center max-w-[800px] mx-auto text-[1.15rem] leading-relaxed dark:text-[#a0a0cc] text-gray-700">
          We are the leading platform for competitive gaming tournaments, connecting players
          from around the world to compete at the highest level.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 w-full mb-20">
        <div
          className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
          style={{
            background: 'linear-gradient(145deg, #111127, #0d0d22)',
            border: '1px solid #2a2a4a',
          }}
        >
          <h2
            className="text-[1.8rem] mb-4 dark:text-[#f0f0ff] text-gray-900"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            🎯 Our Mission
          </h2>
          <p className="text-[1.05rem] leading-relaxed dark:text-[#a0a0cc] text-gray-700">
            To create the most competitive, fair, and exciting esports tournament platform
            where players of all skill levels can showcase their talents, compete for
            substantial prizes, and build lasting connections within the gaming community.
          </p>
        </div>

        <div
          className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
          style={{
            background: 'linear-gradient(145deg, #111127, #0d0d22)',
            border: '1px solid #2a2a4a',
          }}
        >
          <h2
            className="text-[1.8rem] mb-4 dark:text-[#f0f0ff] text-gray-900"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            🚀 Our Vision
          </h2>
          <p className="text-[1.05rem] leading-relaxed dark:text-[#a0a0cc] text-gray-700">
            To become the world's premier esports tournament organizer, setting the standard
            for competitive gaming excellence and fostering a global community of passionate
            gamers who push the boundaries of what's possible in esports.
          </p>
        </div>
      </div>

      {/* Company Stats */}
      <div
        className="flex flex-wrap justify-center gap-7 w-full my-[60px] px-10 py-[50px] rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(34,211,238,0.05))',
          border: '1px solid #2a2a4a',
        }}
      >
        {[
          { num: '5+', label: 'Years Operating' },
          { num: '50K+', label: 'Active Players' },
          { num: '200+', label: 'Tournaments Hosted' },
          { num: '$2M+', label: 'Prizes Awarded' },
        ].map(({ num, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 min-w-[150px]">
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
              {num}
            </span>
            <span className="text-base dark:text-[#a0a0cc] text-gray-700 text-center tracking-wide">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="w-full mt-16">
        <h2
          className="section-title-underline text-center text-[2.5rem] mb-12 tracking-wide dark:text-[#f0f0ff] text-gray-900"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="card-glow flex flex-col items-center rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2"
              style={{
                background: 'linear-gradient(145deg, #111127, #0d0d22)',
                border: '1px solid #2a2a4a',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-cyan-400/30"
              />
              <h3
                className="text-[1.25rem] mb-2 dark:text-[#f0f0ff] text-gray-900"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {member.name}
              </h3>
              <p className="text-cyan-400 font-semibold mb-3 text-sm tracking-wide">
                {member.role}
              </p>
              <p className="text-center text-[0.95rem] leading-relaxed dark:text-[#a0a0cc] text-gray-600">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <h2
          className="text-[2rem] mb-6 dark:text-[#f0f0ff] text-gray-900"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Ready to Join the Competition?
        </h2>
        <a
          href="/signup"
          className="btn-shimmer inline-block px-8 py-4 rounded-xl font-bold text-white text-lg no-underline transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #22d3ee)',
          }}
        >
          Register Your Team Now
        </a>
      </div>
    </main>
  );
}
