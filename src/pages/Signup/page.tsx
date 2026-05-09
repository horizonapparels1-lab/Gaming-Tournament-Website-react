export default function Signup() {
  return (
    <main className="page">
      <h1 className="registration-title">Register Your Team</h1>

      {/* How It Works Steps */}
      <div className="steps-section">
        <h2 className="steps-title">How It Works</h2>
        <div className="steps-grid">
          <div className="step-item">
            <div className="step-number">01</div>
            <h3>Fill the Form</h3>
            <p>Enter your team name, game selection, captain's email, and player count below.</p>
          </div>
          <div className="step-item">
            <div className="step-number">02</div>
            <h3>Confirmation</h3>
            <p>Receive an email confirmation with your team ID and tournament bracket details.</p>
          </div>
          <div className="step-item">
            <div className="step-number">03</div>
            <h3>Compete</h3>
            <p>Show up on match day, compete hard, and climb the leaderboard to win prizes.</p>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      <div className="form-container">
        <form action="#" method="POST">

          <div>
            <label htmlFor="teamName">Team Name</label>
            <input type="text" id="teamName" name="teamName" required placeholder="e.g. Cloud9" />
          </div>

          <div>
            <label htmlFor="gameSelect">Select Tournament</label>
            <div className="select-container">
              <select id="gameSelect" name="gameSelect" required>
                <option value="" disabled>Select a game...</option>
                <option value="valorant">Valorant Masters 2024</option>
                <option value="apex">Apex Legends Championship</option>
                <option value="cs2">CS2 Major Invitational</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="captainEmail">Captain's Email</label>
            <input type="email" id="captainEmail" name="captainEmail" required placeholder="captain@example.com" />
          </div>

          <div>
            <label htmlFor="playerCount">Number of Players</label>
            <input type="number" id="playerCount" name="playerCount" min={3} max={6} required />
          </div>

          <div>
            <label htmlFor="comments">Additional Comments/Requirements</label>
            <textarea id="comments" name="comments" placeholder="Any specific needs or info..."></textarea>
          </div>

          <div className="submit-container">
            <button type="submit" className="lg-button full-width-btn">
              Submit Registration
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}
