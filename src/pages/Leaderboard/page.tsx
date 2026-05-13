export default function Leaderboard() {
  const rows = [
    { rank: '1', team: 'Sentinels',  mp: 15, w: 13, l: 2, pts: 39, isFirst: true },
    { rank: '2', team: 'Fnatic',     mp: 15, w: 12, l: 3, pts: 36, isFirst: false },
    { rank: '3', team: 'Paper Rex',  mp: 15, w: 11, l: 4, pts: 33, isFirst: false },
    { rank: '4', team: 'LOUD',       mp: 15, w: 10, l: 5, pts: 30, isFirst: false },
    { rank: '5', team: 'NRG Esports',mp: 15, w: 9,  l: 6, pts: 27, isFirst: false },
  ];

  return (
    <main className="flex-1 flex flex-col items-center w-full max-w-[1300px] mx-auto px-10 py-[70px] box-border">
      {/* Title */}
      <h1
        className="mb-3.5 text-center text-[3rem] text-[#f0f0ff]"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        Global Leaderboards
      </h1>
      <p className="mb-[50px] text-center text-[1.15rem] text-[#a0a0cc]">
        Current rankings for the Valorant Masters 2024 season.
      </p>

      {/* Season Stats */}
      <div className="flex flex-wrap gap-5 justify-center w-full mb-[50px]">
        {[
          { num: '5',  label: 'Teams Ranked' },
          { num: '75', label: 'Matches Played' },
          { num: '13', label: 'Sentinels Wins' },
          { num: '39', label: 'Top Points' },
        ].map(({ num, label }) => (
          <div
            key={label}
            className="flex flex-col gap-2 min-w-[170px] text-center rounded-2xl px-8 py-7 transition-all duration-300 hover:-translate-y-1"
            style={{ background: '#111127', border: '1px solid #2a2a4a' }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#22d3ee'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#2a2a4a'; }}
          >
            <span
              className="font-black text-[2.2rem] text-cyan-400"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              {num}
            </span>
            <span className="text-[0.85rem] text-[#a0a0cc] uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto mt-7 flex justify-center">
        <table
          className="min-w-[700px] max-w-[1100px] w-full rounded-2xl overflow-hidden"
          style={{
            borderCollapse: 'collapse',
            background: '#111127',
            boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
          }}
        >
          <thead style={{ background: 'linear-gradient(135deg, #1a1a3a, #0d0d2a)' }}>
            <tr>
              {['Rank', 'Team Name', 'Matches Played', 'Wins', 'Losses', 'Points'].map(h => (
                <th
                  key={h}
                  className="px-6 py-5 text-left font-bold text-[0.85rem] uppercase tracking-widest text-cyan-400"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    borderBottom: '2px solid #2a2a4a',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.rank}
                className="cursor-pointer transition-all duration-300"
                style={{
                  background: i % 2 === 0 ? '#111127' : 'rgba(0,0,0,0.2)',
                  borderBottom: i < rows.length - 1 ? '1px solid #2a2a4a' : 'none',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLTableRowElement).style.background =
                    'linear-gradient(90deg, rgba(124,58,237,0.08), rgba(34,211,238,0.08))';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLTableRowElement).style.background =
                    i % 2 === 0 ? '#111127' : 'rgba(0,0,0,0.2)';
                }}
              >
                <td
                  className={`px-6 py-[18px] align-middle ${r.isFirst ? 'font-black text-amber-400 text-[1.1rem]' : 'text-[#a0a0cc]'}`}
                >
                  {r.rank}
                </td>
                <td className="px-6 py-[18px] align-middle font-bold text-[#f0f0ff]">{r.team}</td>
                <td className="px-6 py-[18px] align-middle text-[#a0a0cc]">{r.mp}</td>
                <td className="px-6 py-[18px] align-middle text-[#a0a0cc]">{r.w}</td>
                <td className="px-6 py-[18px] align-middle text-[#a0a0cc]">{r.l}</td>
                <td className="px-6 py-[18px] align-middle text-[#a0a0cc]">{r.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
