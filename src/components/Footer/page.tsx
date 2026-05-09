import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h2>NexGen Esports</h2>
          <p>Empowering gamers worldwide.</p>
        </div>

        <div>
          <h2>Quick Links</h2>
          <Link to="/signup">Register Team</Link>
          <Link to="/leaderboard">Leaderboards</Link>
          <Link to="/results">Results</Link>
        </div>

        <div>
          <h2>Support</h2>
          <Link to="/contact">Contact Us</Link>
          <Link to="#">FAQ</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 NexGen Gaming Tournaments. All rights reserved.</p>
      </div>
    </footer>
  );
}
