import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main className="flex-1 flex flex-col items-center w-full max-w-[1300px] mx-auto px-10 py-[70px] box-border">
      <h1
        className="mb-[50px] text-center text-[3rem] text-[#f0f0ff]"
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        Player Login
      </h1>

      {/* Form card */}
      <div
        className="w-full max-w-[580px] flex flex-col rounded-2xl p-[50px]"
        style={{
          background: 'linear-gradient(145deg, #111127, #0d0d22)',
          border: '1px solid #2a2a4a',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        <form action="#" method="POST">
          {/* Email */}
          <div className="mb-5 flex flex-col">
            <label htmlFor="loginEmail" className="mb-2 font-semibold text-[0.95rem] text-[#f0f0ff] tracking-wide">
              Email Address
            </label>
            <input
              type="email" id="loginEmail" name="loginEmail" required
              placeholder="captain@example.com"
              className="w-full px-4 py-3.5 rounded-lg text-base bg-[#080810] text-[#f0f0ff] outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)]"
              style={{ border: '2px solid #2a2a4a', fontFamily: "'Inter', sans-serif" }}
              onFocus={e => { e.target.style.borderColor = '#22d3ee'; }}
              onBlur={e  => { e.target.style.borderColor = '#2a2a4a'; }}
            />
          </div>

          {/* Password */}
          <div className="mb-5 flex flex-col">
            <label htmlFor="loginPassword" className="mb-2 font-semibold text-[0.95rem] text-[#f0f0ff] tracking-wide">
              Password
            </label>
            <input
              type="password" id="loginPassword" name="loginPassword" required
              placeholder="Enter your password"
              className="w-full px-4 py-3.5 rounded-lg text-base bg-[#080810] text-[#f0f0ff] outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)]"
              style={{ border: '2px solid #2a2a4a', fontFamily: "'Inter', sans-serif" }}
              onFocus={e => { e.target.style.borderColor = '#22d3ee'; }}
              onBlur={e  => { e.target.style.borderColor = '#2a2a4a'; }}
            />
          </div>

          {/* Submit */}
          <div className="mt-7">
            <button
              type="submit"
              className="btn-shimmer w-full px-9 py-[18px] text-[1.15rem] rounded-2xl font-bold text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
                border: 'none',
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(124,58,237,0.5)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
            >
              Login to Account
            </button>
          </div>

          <div className="mt-5 text-center">
            <p className="text-[#a0a0cc] text-[0.95rem] mb-2">Don't have an account?</p>
            <Link
              to="/signup"
              className="text-cyan-400 font-semibold text-[0.95rem] no-underline hover:text-cyan-300 transition-all duration-300"
            >
              Sign Up Here
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
