import { useState, useId } from "react";
import "../Login.css";

const AlertIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4M12 16h.01" />
  </svg>
);

const EyeIcon = ({ off }) =>
  off ? (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17.94 17.94A10.9 10.9 0 0 1 12 19c-6.5 0-10-7-10-7a18.4 18.4 0 0 1 5.06-5.94M9.9 4.24A10.4 10.4 0 0 1 12 4c6.5 0 10 7 10 7a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22" />
      <path d="M14.12 14.12A3 3 0 1 1 9.88 9.88" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

/**
 * Login component.
 * Props:
 *   onLogin({ username, password }) -> Promise. Resolve on success; throw an
 *   Error (message is shown to the user) on failure.
 */
export default function Login({ onLogin }) {
  const uid = useId();
  const userId = `${uid}-username`;
  const passId = `${uid}-password`;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { kind: "ok" | "bad", text }
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    const next = {};
    if (!username.trim()) next.username = "Enter your username.";
    if (!password) next.password = "Enter your password.";
    setErrors(next);
    if (next.username) return document.getElementById(userId).focus();
    if (next.password) return document.getElementById(passId).focus();

    setLoading(true);
    try {
      if (onLogin) await onLogin({ username: username.trim(), password });
      else await new Promise((r) => setTimeout(r, 900)); // demo fallback
      setStatus({ kind: "ok", text: `Signed in as ${username.trim()}.` });
      setPassword("");
    } catch (err) {
      setStatus({
        kind: "bad",
        text: err?.message || "Could not sign in. Try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-card">
      <div className="login-brand" aria-hidden="true">
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
      </div>
      <h1>Sign in</h1>
      <p className="login-sub">Enter your username and password to continue.</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="login-field">
          <label htmlFor={userId}>Username</label>2
          <input
            id={userId}
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setErrors((x) => ({ ...x, username: undefined }));
            }}
            autoComplete="username"
            autoCapitalize="none"
            spellCheck={false}
            placeholder="e.g. aayush_kumar"
            aria-invalid={errors.username ? "true" : undefined}
            aria-describedby={errors.username ? `${userId}-error` : undefined}
          />
          {errors.username && (
            <p className="login-error" id={`${userId}-error`}>
              <AlertIcon />
              <span>{errors.username}</span>
            </p>
          )}
        </div>

        <div className="login-field">
          <label htmlFor={passId}>Password</label>
          <div className="login-control">
            <input
              id={passId}
              type={showPassword ? "text" : "password"}
              className="has-toggle"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((x) => ({ ...x, password: undefined }));
              }}
              autoComplete="current-password"
              placeholder="Enter your password"
              aria-invalid={errors.password ? "true" : undefined}
              aria-describedby={errors.password ? `${passId}-error` : undefined}
            />
            <button
              type="button"
              className="login-toggle"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              aria-controls={passId}
            >
              <EyeIcon off={showPassword} />
            </button>
          </div>
          {errors.password && (
            <p className="login-error" id={`${passId}-error`}>
              <AlertIcon />
              <span>{errors.password}</span>
            </p>
          )}
        </div>

        <div role="status" aria-live="polite">
          {status && (
            <p className={`login-status ${status.kind}`}>{status.text}</p>
          )}
        </div>

        <button
          type="submit"
          className="login-submit"
          disabled={loading}
          aria-busy={loading}
        >
          {loading && <span className="login-spinner" aria-hidden="true" />}
          <span>{loading ? "Signing in…" : "Log in"}</span>
        </button>
      </form>
    </main>
  );
}
