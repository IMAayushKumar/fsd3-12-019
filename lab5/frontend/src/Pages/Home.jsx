import "../Home.css";

/**
 * Home page shown after login.
 * Props:
 *   username  - name to show in the greeting
 *   onLogout  - called when the Log out button is pressed
 */
export default function Home({ username, onLogout }) {
  return (
    <div className="home">
      <header className="home-bar">
        <span className="home-logo" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
        </span>
        <span className="home-brand">My App</span>

        <button type="button" className="home-logout" onClick={onLogout}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <path d="M16 17l5-5-5-5M21 12H9" />
          </svg>
          <span>Log out</span>
        </button>
      </header>

      <main className="home-main">
        <h1>Welcome, {username}</h1>
        <p className="home-sub">
          You are signed in. Use the Log out button when you are done.
        </p>
      </main>
    </div>
  );
}
