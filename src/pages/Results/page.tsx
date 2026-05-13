/* Result card data */
const results = [
  { title: 'Valorant Masters - Quarter Finals', winner: 'Sentinels', score: '2 - 1', loser: 'LOUD' },
  { title: 'Valorant Masters - Quarter Finals', winner: 'Fnatic',    score: '2 - 0', loser: 'NRG' },
  { title: 'CS2 Major - Group Stage',           winner: "Na'Vi",     score: '16 - 14', loser: 'FaZe' },
];

/* Upcoming match data */
const upcoming = [
  { vs: 'Sentinels vs Fnatic',  time: 'June 15, 2024 — 18:00 UTC', tag: 'Valorant' },
  { vs: 'Paper Rex vs LOUD',    time: 'June 16, 2024 — 15:00 UTC', tag: 'Valorant' },
  { vs: "Na'Vi vs G2",          time: 'June 18, 2024 — 20:00 UTC', tag: 'CS2' },
  { vs: 'FaZe vs Liquid',       time: 'June 19, 2024 — 17:00 UTC', tag: 'CS2' },
];

export default function Results() {
  return (
    <main className="flex-1 flex flex-col items-center w-full max-w-[1300px] mx-auto px-10 py-[70px] box-border">
      {/* Title */}
      <h1
        className="mb-[50px] text-center text-[3rem] text-[#f0f0ff]"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        Recent Match Results
      </h1>

      {/* Result Cards */}
      <div className="flex flex-wrap justify-center gap-7 w-full my-[50px] mx-3">
        {results.map(({ title, winner, score, loser }) => (
          <div
            key={title + winner}
            className="card-glow flex flex-col items-center text-center rounded-2xl p-7 w-[340px] transition-all duration-300 hover:-translate-y-2.5"
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
            {/* Match label */}
            <h3 className="text-[#666688] text-[0.9rem] mb-5 uppercase tracking-widest m-0">
              {title}
            </h3>

            {/* Scoreboard */}
            <div className="flex justify-center items-center w-full mb-6 gap-2.5">
              <span
                className="text-[1.4rem] font-bold w-[40%] text-[#f0f0ff]"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {winner}
              </span>
              <span
                className="text-[1.4rem] font-black w-[20%] text-cyan-400"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {score}
              </span>
              <span
                className="text-[1.4rem] font-bold w-[40%] text-[#666688]"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {loser}
              </span>
            </div>

            {/* Highlights link */}
            <a
              href="#"
              className="mt-auto self-start py-1 text-base font-bold no-underline flex items-center gap-1.5 text-cyan-400 transition-all duration-300 hover:text-white hover:gap-3"
              style={{ background: 'none' }}
            >
              View Highlights →
            </a>
          </div>
        ))}
      </div>

      {/* Upcoming Matches */}
      <div className="w-full mt-[60px]">
        <h2
          className="text-[1.8rem] text-center mb-7 text-[#f0f0ff]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Upcoming Matches
        </h2>

        {upcoming.map(({ vs, time, tag }) => (
          <div
            key={vs}
            className="flex items-center justify-between flex-wrap gap-4 rounded-2xl px-[30px] py-[22px] mb-3 transition-all duration-300"
            style={{ background: '#111127', border: '1px solid #2a2a4a' }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#7c3aed'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#2a2a4a'; }}
          >
            <span
              className="font-bold text-[1.05rem] text-[#f0f0ff]"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {vs}
            </span>
            <span className="text-[0.9rem] font-semibold text-cyan-400">{time}</span>
            <span
              className="rounded-full px-3.5 py-1 text-[0.8rem] font-bold"
              style={{
                background: 'rgba(124,58,237,0.2)',
                border: '1px solid #7c3aed',
                color: '#7c3aed',
              }}
            >
              {tag}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
