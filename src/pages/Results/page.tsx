export default function Results() {
  return (
    <main className="page">
      <h1 className="results-title">Recent Match Results</h1>

      <div className="card-container">

        {/* Result Card 1 */}
        <div className="card result-card">
          <h3 className="match-title">Valorant Masters - Quarter Finals</h3>
          <div className="match-scoreboard">
            <span className="team-winner">Sentinels</span>
            <span className="match-score">2 - 1</span>
            <span className="team-loser">LOUD</span>
          </div>
          <a href="#">View Highlights &rarr;</a>
        </div>

        {/* Result Card 2 */}
        <div className="card result-card">
          <h3 className="match-title">Valorant Masters - Quarter Finals</h3>
          <div className="match-scoreboard">
            <span className="team-winner">Fnatic</span>
            <span className="match-score">2 - 0</span>
            <span className="team-loser">NRG</span>
          </div>
          <a href="#">View Highlights &rarr;</a>
        </div>

        {/* Result Card 3 */}
        <div className="card result-card">
          <h3 className="match-title">CS2 Major - Group Stage</h3>
          <div className="match-scoreboard">
            <span className="team-winner">Na'Vi</span>
            <span className="match-score">16 - 14</span>
            <span className="team-loser">FaZe</span>
          </div>
          <a href="#">View Highlights &rarr;</a>
        </div>

      </div>

      {/* Upcoming Matches Section */}
      <div className="upcoming-matches-section">
        <h2 className="upcoming-matches-title">Upcoming Matches</h2>

        <div className="match-upcoming-item">
          <span className="match-vs">Sentinels vs Fnatic</span>
          <span className="match-time">June 15, 2024 — 18:00 UTC</span>
          <span className="match-game-tag">Valorant</span>
        </div>

        <div className="match-upcoming-item">
          <span className="match-vs">Paper Rex vs LOUD</span>
          <span className="match-time">June 16, 2024 — 15:00 UTC</span>
          <span className="match-game-tag">Valorant</span>
        </div>

        <div className="match-upcoming-item">
          <span className="match-vs">Na'Vi vs G2</span>
          <span className="match-time">June 18, 2024 — 20:00 UTC</span>
          <span className="match-game-tag">CS2</span>
        </div>

        <div className="match-upcoming-item">
          <span className="match-vs">FaZe vs Liquid</span>
          <span className="match-time">June 19, 2024 — 17:00 UTC</span>
          <span className="match-game-tag">CS2</span>
        </div>
      </div>
    </main>
  );
}
