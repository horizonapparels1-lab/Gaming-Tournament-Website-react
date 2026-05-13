/* ── Shared input style helpers ─────────────────────────── */
const inputCls = "w-full px-4 py-3.5 rounded-lg text-base bg-[#080810] text-[#f0f0ff] outline-none transition-all duration-300";
const inputStyle = { border: '2px solid #2a2a4a', fontFamily: "'Inter', sans-serif" };
const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  e.target.style.borderColor = '#22d3ee';
};
const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  e.target.style.borderColor = '#2a2a4a';
};

export default function Signup() {
  return (
    <main className="flex-1 flex flex-col items-center w-full max-w-[1300px] mx-auto px-10 py-[70px] box-border">
      <h1
        className="mb-[50px] text-center text-[3rem] text-[#f0f0ff]"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        Register Your Team
      </h1>

      {/* How It Works */}
      <div className="w-full mb-[60px]">
        <h2
          className="text-center text-[2rem] mb-10 text-[#f0f0ff]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          How It Works
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {[
            { num: '01', title: 'Fill the Form',  desc: "Enter your team name, game selection, captain's email, and player count below." },
            { num: '02', title: 'Confirmation',   desc: 'Receive an email confirmation with your team ID and tournament bracket details.' },
            { num: '03', title: 'Compete',        desc: 'Show up on match day, compete hard, and climb the leaderboard to win prizes.' },
          ].map(({ num, title, desc }) => (
            <div
              key={num}
              className="flex flex-col items-center text-center gap-3.5 p-9 w-[240px] rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
              style={{ background: '#111127', border: '1px solid #2a2a4a' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#22d3ee'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#2a2a4a'; }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-[1.4rem] font-black text-white flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                {num}
              </div>
              <h3 className="m-0 text-[1.1rem] text-[#f0f0ff]" style={{ fontFamily: "'Orbitron', sans-serif" }}>{title}</h3>
              <p className="m-0 text-[0.95rem] text-[#a0a0cc]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Form */}
      <div
        className="w-full max-w-[580px] flex flex-col rounded-2xl p-[50px]"
        style={{
          background: 'linear-gradient(145deg, #111127, #0d0d22)',
          border: '1px solid #2a2a4a',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        <form action="#" method="POST">
          <div className="mb-5 flex flex-col">
            <label htmlFor="teamName" className="mb-2 font-semibold text-[0.95rem] text-[#f0f0ff] tracking-wide">Team Name</label>
            <input type="text" id="teamName" name="teamName" required placeholder="e.g. Cloud9"
              className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
          </div>

          <div className="mb-5 flex flex-col">
            <label htmlFor="gameSelect" className="mb-2 font-semibold text-[0.95rem] text-[#f0f0ff] tracking-wide">Select Tournament</label>
            <div className="relative flex flex-col">
              <select id="gameSelect" name="gameSelect" required
                className="w-full px-4 py-3.5 rounded-lg appearance-none cursor-pointer text-base bg-[#080810] text-[#f0f0ff] outline-none transition-all duration-300"
                style={inputStyle} onFocus={onFocus} onBlur={onBlur}
              >
                <option value="" disabled>Select a game...</option>
                <option value="valorant">Valorant Masters 2024</option>
                <option value="apex">Apex Legends Championship</option>
                <option value="cs2">CS2 Major Invitational</option>
              </select>
            </div>
          </div>

          <div className="mb-5 flex flex-col">
            <label htmlFor="captainEmail" className="mb-2 font-semibold text-[0.95rem] text-[#f0f0ff] tracking-wide">Captain's Email</label>
            <input type="email" id="captainEmail" name="captainEmail" required placeholder="captain@example.com"
              className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
          </div>

          <div className="mb-5 flex flex-col">
            <label htmlFor="playerCount" className="mb-2 font-semibold text-[0.95rem] text-[#f0f0ff] tracking-wide">Number of Players</label>
            <input type="number" id="playerCount" name="playerCount" min={3} max={6} required
              className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
          </div>

          <div className="mb-5 flex flex-col">
            <label htmlFor="comments" className="mb-2 font-semibold text-[0.95rem] text-[#f0f0ff] tracking-wide">Additional Comments/Requirements</label>
            <textarea id="comments" name="comments" placeholder="Any specific needs or info..."
              className="w-full px-4 py-3.5 rounded-lg text-base bg-[#080810] text-[#f0f0ff] outline-none resize-y min-h-[140px] transition-all duration-300"
              style={inputStyle} onFocus={onFocus} onBlur={onBlur}
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="btn-shimmer w-full px-9 py-[18px] text-[1.15rem] rounded-2xl font-bold text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #9333ea)', border: 'none', fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(124,58,237,0.5)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
