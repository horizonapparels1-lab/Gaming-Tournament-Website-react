import { useState } from 'react';

type FaqItem = { id: string; question: string; answer: string };

const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I register my team?',
    answer: "Click \"Register Team\" in the navbar, fill out the registration form with your team name, tournament choice, captain's email, and player count, then submit.",
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

const infoCards = [
  { icon: '📧', title: 'Email Us',      desc: 'support@nexgenesports.gg' },
  { icon: '💬', title: 'Discord',       desc: 'discord.gg/nexgenesports' },
  { icon: '🌐', title: 'Social Media',  desc: '@NexGenEsports on all platforms' },
  { icon: '🕐', title: 'Support Hours', desc: 'Mon – Fri, 9 AM – 10 PM UTC' },
];

const inputCls = "w-full px-4 py-3.5 rounded-lg text-base bg-[#080810] text-[#f0f0ff] outline-none transition-all duration-300";
const inputStyle = { border: '2px solid #2a2a4a', fontFamily: "'Inter', sans-serif" };
const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.target.style.borderColor = '#22d3ee'; };
const onBlur  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.target.style.borderColor = '#2a2a4a'; };

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <main className="flex-1 flex flex-col items-center w-full max-w-[1300px] mx-auto px-10 py-[70px] box-border">
      {/* Title */}
      <h1
        className="mb-3.5 text-center text-[3rem] text-[#f0f0ff]"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        Contact Support
      </h1>
      <p className="mb-[50px] text-center text-[1.15rem] text-[#a0a0cc]">
        Have questions about upcoming tournaments? Reach out to us below.
      </p>

      {/* Info Cards */}
      <div className="flex flex-wrap gap-6 justify-center w-full mb-[60px]">
        {infoCards.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center gap-3 p-9 w-[230px] rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
            style={{ background: '#111127', border: '1px solid #2a2a4a' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = '#22d3ee';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px rgba(34,211,238,0.4)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = '#2a2a4a';
              (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
            }}
          >
            <span className="text-[2.5rem] leading-none">{icon}</span>
            <h3 className="m-0 text-[1rem] text-cyan-400" style={{ fontFamily: "'Orbitron', sans-serif" }}>{title}</h3>
            <p className="m-0 text-[0.95rem] text-[#a0a0cc]">{desc}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div
        className="w-full max-w-[580px] flex flex-col rounded-2xl p-[50px]"
        style={{
          background: 'linear-gradient(145deg, #111127, #0d0d22)',
          border: '1px solid #2a2a4a',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        <form action="#" method="POST">
          {[
            { id: 'name',    label: 'Your Name',      type: 'text',  placeholder: 'John Doe' },
            { id: 'email',   label: 'Email Address',  type: 'email', placeholder: 'john@example.com' },
            { id: 'subject', label: 'Subject',        type: 'text',  placeholder: 'Question about registration...' },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id} className="mb-5 flex flex-col">
              <label htmlFor={id} className="mb-2 font-semibold text-[0.95rem] text-[#f0f0ff] tracking-wide">{label}</label>
              <input
                type={type} id={id} name={id} required placeholder={placeholder}
                className={inputCls} style={inputStyle} onFocus={onFocus} onBlur={onBlur}
              />
            </div>
          ))}

          <div className="mb-5 flex flex-col">
            <label htmlFor="message" className="mb-2 font-semibold text-[0.95rem] text-[#f0f0ff] tracking-wide">Message</label>
            <textarea
              id="message" name="message" required placeholder="How can we help you?"
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
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* FAQ */}
      <div className="w-full max-w-[800px] mx-auto mt-[60px] mb-[60px]">
        <h2
          className="text-center text-[2rem] mb-7 text-[#f0f0ff]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Frequently Asked Questions
        </h2>

        {faqs.map(({ id, question, answer }) => {
          const isOpen = openFaq === id;
          return (
            <div
              key={id}
              className={`rounded-2xl mb-3 overflow-hidden transition-all duration-300 ${isOpen ? 'faq-open' : ''}`}
              style={{
                background: '#111127',
                border: `1px solid ${isOpen ? '#22d3ee' : '#2a2a4a'}`,
              }}
            >
              <div
                className="faq-question-toggle px-7 py-[22px] text-base font-semibold text-[#f0f0ff] select-none"
                onClick={() => setOpenFaq(prev => (prev === id ? null : id))}
              >
                {question}
              </div>
              {isOpen && (
                <div className="px-7 pb-[22px] text-[0.95rem] leading-relaxed text-[#a0a0cc]">
                  {answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
