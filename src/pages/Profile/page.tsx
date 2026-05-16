import { useState } from 'react';

export default function Profile() {
  // Simulated logged-in user data (in real app, this would come from auth context)
  const [user] = useState({
    name: 'Usman Ghani',
    email: 'usmanghani@nexgen.com',
    username: 'ProGamer2024',
    avatar: 'https://i.pravatar.cc/300?img=68',
    teamName: 'Thunder Strikers',
    rank: 'Diamond',
    joinDate: 'January 2024',
    totalMatches: 47,
    wins: 32,
    losses: 15,
    winRate: '68%',
    favoriteGame: 'Valorant',
    region: 'North America',
  });

  const achievements = [
    { icon: '🏆', title: 'Tournament Winner', desc: 'Won 3 major tournaments' },
    { icon: '⚡', title: 'Speed Demon', desc: 'Fastest match completion' },
    { icon: '🎯', title: 'Sharpshooter', desc: '95% accuracy rating' },
    { icon: '👑', title: 'MVP', desc: 'MVP in 12 matches' },
  ];

  const recentMatches = [
    { game: 'Valorant Masters', result: 'Win', score: '13-7', date: 'May 10, 2026' },
    { game: 'Apex Championship', result: 'Win', score: '2-1', date: 'May 8, 2026' },
    { game: 'CS2 Invitational', result: 'Loss', score: '10-13', date: 'May 5, 2026' },
  ];

  return (
    <main className="flex-1 flex flex-col items-center w-full max-w-[1300px] mx-auto px-10 py-[70px] box-border">
      {/* Profile Header */}
      <div
        className="w-full rounded-2xl p-10 mb-10"
        style={{
          background: 'linear-gradient(145deg, #111127, #0d0d22)',
          border: '1px solid #2a2a4a',
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar */}
          <img
            src={user.avatar}
            alt={user.name}
            className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400"
          />

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h1
              className="text-[2.5rem] mb-2 font-black tracking-wide"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                background: 'linear-gradient(135deg, #22d3ee, #7c3aed)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {user.name}
            </h1>
            <p className="text-cyan-400 text-lg mb-2">@{user.username}</p>
            <p className="dark:text-[#a0a0cc] text-gray-700 mb-4">{user.email}</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <span className="px-4 py-2 rounded-lg bg-violet-600/20 text-violet-400 font-semibold">
                {user.teamName}
              </span>
              <span className="px-4 py-2 rounded-lg bg-cyan-600/20 text-cyan-400 font-semibold">
                {user.rank} Rank
              </span>
              <span className="px-4 py-2 rounded-lg bg-amber-600/20 text-amber-400 font-semibold">
                {user.region}
              </span>
            </div>
          </div>

          {/* Edit Button */}
          <button
            className="btn-shimmer px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #22d3ee)',
            }}
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mb-10">
        {[
          { label: 'Total Matches', value: user.totalMatches },
          { label: 'Wins', value: user.wins },
          { label: 'Losses', value: user.losses },
          { label: 'Win Rate', value: user.winRate },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(145deg, #111127, #0d0d22)',
              border: '1px solid #2a2a4a',
            }}
          >
            <p
              className="text-4xl font-black mb-2"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                background: 'linear-gradient(135deg, #22d3ee, #7c3aed)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {stat.value}
            </p>
            <p className="dark:text-[#a0a0cc] text-gray-700 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="w-full mb-10">
        <h2
          className="text-[2rem] mb-6 dark:text-[#f0f0ff] text-gray-900"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          🏅 Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="card-glow rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2"
              style={{
                background: 'linear-gradient(145deg, #111127, #0d0d22)',
                border: '1px solid #2a2a4a',
              }}
            >
              <span className="text-5xl mb-3 block">{achievement.icon}</span>
              <h3
                className="text-lg mb-2 dark:text-[#f0f0ff] text-gray-900"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {achievement.title}
              </h3>
              <p className="text-sm dark:text-[#a0a0cc] text-gray-600">{achievement.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Matches */}
      <div className="w-full">
        <h2
          className="text-[2rem] mb-6 dark:text-[#f0f0ff] text-gray-900"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          📊 Recent Matches
        </h2>
        <div className="flex flex-col gap-4">
          {recentMatches.map((match, idx) => (
            <div
              key={idx}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl px-8 py-6 transition-all duration-300 hover:border-cyan-400/50"
              style={{
                background: 'linear-gradient(145deg, #111127, #0d0d22)',
                border: '1px solid #2a2a4a',
              }}
            >
              <span
                className="font-bold text-lg dark:text-[#f0f0ff] text-gray-900"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {match.game}
              </span>
              <span
                className={`px-4 py-2 rounded-lg font-semibold ${
                  match.result === 'Win'
                    ? 'bg-green-600/20 text-green-400'
                    : 'bg-red-600/20 text-red-400'
                }`}
              >
                {match.result}
              </span>
              <span className="text-cyan-400 font-semibold">{match.score}</span>
              <span className="dark:text-[#a0a0cc] text-gray-600">{match.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Account Details */}
      <div
        className="w-full mt-10 rounded-2xl p-8"
        style={{
          background: 'linear-gradient(145deg, #111127, #0d0d22)',
          border: '1px solid #2a2a4a',
        }}
      >
        <h2
          className="text-[2rem] mb-6 dark:text-[#f0f0ff] text-gray-900"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          ⚙️ Account Details
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm dark:text-[#a0a0cc] text-gray-600 mb-1">Favorite Game</p>
            <p className="text-lg dark:text-[#f0f0ff] text-gray-900 font-semibold">{user.favoriteGame}</p>
          </div>
          <div>
            <p className="text-sm dark:text-[#a0a0cc] text-gray-600 mb-1">Member Since</p>
            <p className="text-lg dark:text-[#f0f0ff] text-gray-900 font-semibold">{user.joinDate}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
