import { useState } from 'react';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  tournament: string;
  comment: string;
}

export default function Reviews() {
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      name: 'Alex "Striker" Johnson',
      avatar: 'https://i.pravatar.cc/150?img=11',
      rating: 5,
      date: 'May 12, 2026',
      tournament: 'Valorant Masters 2024',
      comment:
        'Amazing tournament experience! The organization was flawless, matches were fair, and the prize distribution was quick. Highly recommend NexGen for competitive gaming.',
    },
    {
      id: 2,
      name: 'Sarah "Phoenix" Lee',
      avatar: 'https://i.pravatar.cc/150?img=45',
      rating: 5,
      date: 'May 10, 2026',
      tournament: 'Apex Legends Championship',
      comment:
        'Best esports platform I\'ve used. The live leaderboard updates are instant, and the support team is incredibly responsive. Will definitely participate in future tournaments.',
    },
    {
      id: 3,
      name: 'Marcus "Shadow" Williams',
      avatar: 'https://i.pravatar.cc/150?img=33',
      rating: 4,
      date: 'May 8, 2026',
      tournament: 'CS2 Major Invitational',
      comment:
        'Great competition level and professional setup. Only minor issue was some lag during peak hours, but overall an excellent experience. Looking forward to the next event!',
    },
    {
      id: 4,
      name: 'Emily "Viper" Chen',
      avatar: 'https://i.pravatar.cc/150?img=47',
      rating: 5,
      date: 'May 5, 2026',
      tournament: 'Rocket League Cup',
      comment:
        'NexGen sets the standard for esports tournaments. Fair matchmaking, transparent rules, and the community is fantastic. This is where serious gamers compete!',
    },
    {
      id: 5,
      name: 'David "Titan" Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=68',
      rating: 4,
      date: 'May 3, 2026',
      tournament: 'Valorant Masters 2024',
      comment:
        'Solid tournament platform with great features. The registration process was smooth and the bracket system is well-designed. Would love to see more regional events.',
    },
    {
      id: 6,
      name: 'Jessica "Nova" Park',
      avatar: 'https://i.pravatar.cc/150?img=25',
      rating: 5,
      date: 'May 1, 2026',
      tournament: 'Apex Legends Championship',
      comment:
        'Incredible experience from start to finish! The live streaming quality was top-notch, and the commentary team was professional. Can\'t wait for the next season!',
    },
  ]);

  const averageRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  ).toFixed(1);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-amber-400' : 'text-gray-600'}>
        ★
      </span>
    ));
  };

  return (
    <main className="flex-1 flex flex-col items-center w-full max-w-[1300px] mx-auto px-10 py-[70px] box-border">
      <h1
        className="text-[3.5rem] mb-6 font-black tracking-widest text-center"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          background: 'linear-gradient(135deg, #f0f0ff 0%, #22d3ee 50%, #7c3aed 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Player Reviews
      </h1>

      <p className="text-center max-w-[700px] mx-auto mb-12 text-[1.15rem] leading-relaxed dark:text-[#a0a0cc] text-gray-700">
        See what our community has to say about their tournament experiences
      </p>

      {/* Rating Summary */}
      <div
        className="w-full max-w-[500px] rounded-2xl p-8 mb-12 text-center"
        style={{
          background: 'linear-gradient(145deg, #111127, #0d0d22)',
          border: '1px solid #2a2a4a',
        }}
      >
        <div
          className="text-6xl font-black mb-3"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            background: 'linear-gradient(135deg, #22d3ee, #7c3aed)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {averageRating}
        </div>
        <div className="text-3xl mb-3">{renderStars(Math.round(parseFloat(averageRating)))}</div>
        <p className="dark:text-[#a0a0cc] text-gray-700">
          Based on {reviews.length} reviews
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 gap-6 w-full">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="card-glow rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(145deg, #111127, #0d0d22)',
              border: '1px solid #2a2a4a',
            }}
          >
            {/* Reviewer Info */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/50"
              />
              <div className="flex-1">
                <h3
                  className="text-lg font-bold dark:text-[#f0f0ff] text-gray-900"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {review.name}
                </h3>
                <p className="text-sm dark:text-[#a0a0cc] text-gray-600">{review.date}</p>
              </div>
              <div className="text-xl">{renderStars(review.rating)}</div>
            </div>

            {/* Tournament Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-violet-600/20 text-violet-400">
                {review.tournament}
              </span>
            </div>

            {/* Review Comment */}
            <p className="leading-relaxed dark:text-[#a0a0cc] text-gray-700">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      {/* Write Review CTA */}
      <div
        className="w-full mt-16 rounded-2xl p-10 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(34,211,238,0.05))',
          border: '1px solid #2a2a4a',
        }}
      >
        <h2
          className="text-[2rem] mb-4 dark:text-[#f0f0ff] text-gray-900"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Share Your Experience
        </h2>
        <p className="mb-6 text-lg dark:text-[#a0a0cc] text-gray-700">
          Participated in one of our tournaments? We'd love to hear your feedback!
        </p>
        <button
          className="btn-shimmer px-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #22d3ee)',
          }}
        >
          Write a Review
        </button>
      </div>
    </main>
  );
}
