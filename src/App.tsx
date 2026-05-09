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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        {/* Home page content lives directly in App.tsx */}
        <Route path="/" element={
          <main className="page">
            <h1 className="hero-title">Welcome to NexGen Tournaments</h1>

            <p className="hero-description">
              Join the most competitive and thrilling esports tournaments around the globe.
              Compete, win prizes, and make a name for your team.
            </p>

            {/* Stats Section */}
            <div className="stats-section">
              <div className="stat-item">
                <span className="stat-number">1,200+</span>
                <span className="stat-label">Teams Registered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">48</span>
                <span className="stat-label">Tournaments Hosted</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">$500K</span>
                <span className="stat-label">Total Prize Pool</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">32</span>
                <span className="stat-label">Countries Represented</span>
              </div>
            </div>

            <div className="section-divider"></div>

            <h2 className="section-title">Featured Tournaments</h2>

            <div className="card-container">
              {/* Card 1 */}
              <div className="card">
                <img src="/images/image1.jpg" alt="Valorant Masters 2024" />
                <h3 className="card-title">Valorant Masters 2024</h3>
                <p>A 5v5 tactical shooter tournament with a prize pool of $50,000. Registrations open now.</p>
                <Link to="/signup">Register Now &rarr;</Link>
              </div>

              {/* Card 2 */}
              <div className="card">
                <img src="/images/image2.jpg" alt="Apex Legends Championship" />
                <h3 className="card-title">Apex Legends Championship</h3>
                <p>Battle Royale trio tournament. Show your skills and dominate the outlands.</p>
                <Link to="/signup">Register Now &rarr;</Link>
              </div>

              {/* Card 3 */}
              <div className="card">
                <img src="/images/image3.jpg" alt="CS2 Major Invitational" />
                <h3 className="card-title">CS2 Major Invitational</h3>
                <p>The ultimate test of precision and teamwork. Invite-only teams.</p>
                <Link to="/leaderboard">View Leaderboard &rarr;</Link>
              </div>
            </div>

            <div className="section-divider"></div>

            {/* Features Section */}
            <div className="features-section">
              <h2 className="features-title">Why Join NexGen?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon">🏆</span>
                  <h3>Massive Prize Pools</h3>
                  <p>Compete for life-changing prize pools across every major esports title with guaranteed payouts.</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌍</span>
                  <h3>Global Competition</h3>
                  <p>Face off against the best teams from over 32 countries in international bracket play.</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📡</span>
                  <h3>Live Broadcasts</h3>
                  <p>Every match is streamed live with professional commentary and real-time stats.</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <h3>Instant Rankings</h3>
                  <p>Our live leaderboard updates after every match so standings are always accurate.</p>
                </div>
              </div>
            </div>

            <div className="section-divider"></div>

            {/* Upcoming Tournaments */}
            <div className="upcoming-section">
              <h2 className="upcoming-title">Upcoming Tournaments</h2>
              <div className="upcoming-list">
                <div className="upcoming-item">
                  <span className="upcoming-game">Valorant Masters 2024</span>
                  <span className="upcoming-date">June 15, 2024</span>
                  <span className="upcoming-prize">$50,000</span>
                  <span className="upcoming-badge">Open</span>
                </div>
                <div className="upcoming-item">
                  <span className="upcoming-game">Apex Legends Championship</span>
                  <span className="upcoming-date">July 3, 2024</span>
                  <span className="upcoming-prize">$30,000</span>
                  <span className="upcoming-badge">Open</span>
                </div>
                <div className="upcoming-item">
                  <span className="upcoming-game">CS2 Major Invitational</span>
                  <span className="upcoming-date">August 20, 2024</span>
                  <span className="upcoming-prize">$100,000</span>
                  <span className="upcoming-badge">Invite Only</span>
                </div>
                <div className="upcoming-item">
                  <span className="upcoming-game">Rocket League Cup</span>
                  <span className="upcoming-date">September 5, 2024</span>
                  <span className="upcoming-prize">$20,000</span>
                  <span className="upcoming-badge">Open</span>
                </div>
              </div>
            </div>
          </main>
        } />

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
