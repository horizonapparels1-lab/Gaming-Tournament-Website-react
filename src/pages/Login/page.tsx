export default function Login() {
  return (
    <main className="page">
      <h1 className="registration-title">Player Login</h1>

      <div className="form-container">
        <form action="#" method="POST">

          <div>
            <label htmlFor="loginEmail">Email Address</label>
            <input
              type="email"
              id="loginEmail"
              name="loginEmail"
              required
              placeholder="captain@example.com"
            />
          </div>

          <div>
            <label htmlFor="loginPassword">Password</label>
            <input
              type="password"
              id="loginPassword"
              name="loginPassword"
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="submit-container">
            <button type="submit" className="lg-button full-width-btn">
              Login to Account
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}
