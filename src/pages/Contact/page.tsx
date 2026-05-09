import { useState } from 'react';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I register my team?',
    answer: 'Click "Register Team" in the navbar, fill out the registration form with your team name, tournament choice, captain\'s email, and player count, then submit.',
  },
  {
    id: 'faq-2',
    question: 'What is the minimum team size?',
    answer: 'Minimum team size is 3 players and maximum is 6. This varies by tournament type — Valorant requires 5, CS2 requires 5, and Apex allows 3.',
  },
  {
    id: 'faq-3',
    question: 'How are prizes distributed?',
    answer: 'Prizes are distributed to the top 3 finishing teams. 1st place receives 60%, 2nd place receives 25%, and 3rd place receives 15% of the prize pool.',
  },
  {
    id: 'faq-4',
    question: 'Can I watch matches live?',
    answer: 'Yes! All NexGen tournament matches are broadcast live on our Twitch and YouTube channels with professional commentary and real-time stats.',
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  function toggleFaq(id: string) {
    setOpenFaq(prev => (prev === id ? null : id));
  }

  return (
    <main className="page">
      <h1 className="contact-title">Contact Support</h1>

      <p className="contact-description">
        Have questions about upcoming tournaments? Reach out to us below.
      </p>

      {/* Contact Info Cards */}
      <div className="contact-info-grid">
        <div className="contact-info-card">
          <span className="contact-icon">📧</span>
          <h3>Email Us</h3>
          <p>support@nexgenesports.gg</p>
        </div>
        <div className="contact-info-card">
          <span className="contact-icon">💬</span>
          <h3>Discord</h3>
          <p>discord.gg/nexgenesports</p>
        </div>
        <div className="contact-info-card">
          <span className="contact-icon">🌐</span>
          <h3>Social Media</h3>
          <p>@NexGenEsports on all platforms</p>
        </div>
        <div className="contact-info-card">
          <span className="contact-icon">🕐</span>
          <h3>Support Hours</h3>
          <p>Mon – Fri, 9 AM – 10 PM UTC</p>
        </div>
      </div>

      <div className="section-divider"></div>

      <div className="form-container">
        <form action="#" method="POST">

          <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required placeholder="John Doe" />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required placeholder="john@example.com" />
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required placeholder="Question about registration..." />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required placeholder="How can we help you?"></textarea>
          </div>

          <div className="submit-container">
            <button type="submit" className="lg-button full-width-btn">
              Send Message
            </button>
          </div>

        </form>
      </div>

      <div className="section-divider"></div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        {faqs.map(faq => (
          <div
            key={faq.id}
            className={`faq-item${openFaq === faq.id ? ' open' : ''}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFaq(faq.id)}
            >
              {faq.question}
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
