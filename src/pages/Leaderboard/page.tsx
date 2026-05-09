export default function Leaderboard() {
  return (
    <main className="page">
      <h1 className="leaderboard-title">Global Leaderboards</h1>
      <p className="leaderboard-description">Current rankings for the Valorant Masters 2024 season.</p>

      {/* Season Stats */}
      <div className="season-stats">
        <div className="season-stat-card">
          <span className="season-stat-number">5</span>
          <span className="season-stat-label">Teams Ranked</span>
        </div>
        <div className="season-stat-card">
          <span className="season-stat-number">75</span>
          <span className="season-stat-label">Matches Played</span>
        </div>
        <div className="season-stat-card">
          <span className="season-stat-number">13</span>
          <span className="season-stat-label">Sentinels Wins</span>
        </div>
        <div className="season-stat-card">
          <span className="season-stat-number">39</span>
          <span className="season-stat-label">Top Points</span>
        </div>
      </div>

      <div className="section-divider"></div>

      <div className="table-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team Name</th>
              <th>Matches Played</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="rank-one">1</td>
              <td className="team-name">Sentinels</td>
              <td>15</td><td>13</td><td>2</td><td>39</td>
            </tr>
            <tr>
              <td>2</td>
              <td className="team-name">Fnatic</td>
              <td>15</td><td>12</td><td>3</td><td>36</td>
            </tr>
            <tr>
              <td>3</td>
              <td className="team-name">Paper Rex</td>
              <td>15</td><td>11</td><td>4</td><td>33</td>
            </tr>
            <tr>
              <td>4</td>
              <td className="team-name">LOUD</td>
              <td>15</td><td>10</td><td>5</td><td>30</td>
            </tr>
            <tr>
              <td>5</td>
              <td className="team-name">NRG Esports</td>
              <td>15</td><td>9</td><td>6</td><td>27</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
