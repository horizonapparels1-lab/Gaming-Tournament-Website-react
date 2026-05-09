import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <main className="page">
      <h1 className="hero-title">Our Services</h1>

      <p className="hero-description">
        NexGen provides world-class tournament infrastructure, broadcasting, and competitive gaming services
        for teams and organizations worldwide.
      </p>

      <div className="section-divider"></div>

      {/* Services Feature Grid */}
      <div className="features-section">
        <h2 className="features-title">What We Offer</h2>
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">🏟️</span>
            <h3>Tournament Hosting</h3>
            <p>End-to-end tournament organization from brackets and scheduling to results and prize distribution.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📡</span>
            <h3>Live Broadcasting</h3>
            <p>Professional-grade live streaming with commentary, overlays, and real-time analytics for every match.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📊</span>
            <h3>Analytics & Stats</h3>
            <p>Advanced performance dashboards and stat tracking across all major esports titles.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎓</span>
            <h3>Team Development</h3>
            <p>Coaching programs, scrim networks, and mentorship to help teams level up their competitive play.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🛡️</span>
            <h3>Anti-Cheat Systems</h3>
            <p>Robust fair play enforcement with automated detection and human review for all competitive matches.</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🌐</span>
            <h3>Global Network</h3>
            <p>Low-latency servers across 15+ regions ensuring fair competition for teams around the world.</p>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* CTA */}
      <div className="upcoming-section">
        <h2 className="upcoming-title">Ready to Compete?</h2>
        <div className="upcoming-list">
          <div className="upcoming-item">
            <span className="upcoming-game">Register Your Team</span>
            <span className="upcoming-date">Open Registrations Now</span>
            <span className="upcoming-prize">$500K+ Prize Pool</span>
            <Link to="/signup" className="upcoming-badge">Join Now</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
