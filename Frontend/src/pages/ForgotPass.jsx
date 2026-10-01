import { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

function ForgotPass() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    // Replace this with your backend reset-password API.
    console.log("Reset password for:", email);

    setSent(true);
  };

  return (
    <main className="auth-page">
      <section className="auth-brand-panel">
        <div className="auth-logo">
          <span>✚</span>
          <h1>
            MediStock <em>AI</em>
          </h1>
        </div>

        <div className="auth-brand-copy">
          <h2>Secure access for your pharmacy team.</h2>
          <p>
            Reset your password securely and continue managing pharmacy
            inventory with confidence.
          </p>
        </div>

        <p className="auth-brand-footer">
          Better inventory. Safer communities.
        </p>
      </section>

      <section className="auth-form-panel">
        <form className="auth-card" onSubmit={handleSubmit}>
          <Link className="back-to-login" to="/login">
            <ArrowLeft size={18} />
            Back to login
          </Link>

          {sent ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h2>Check your inbox</h2>
              <p>
                If an account exists for <strong>{email}</strong>, you will
                receive password-reset instructions shortly.
              </p>

              <Link className="auth-submit-button link-button" to="/login">
                Return to login
              </Link>
            </div>
          ) : (
            <>
              <div className="auth-heading">
                <h2>Forgot password?</h2>
                <p>
                  Enter your registered email and we will send reset
                  instructions.
                </p>
              </div>

              {error && <p className="auth-error">{error}</p>}

              <label className="auth-field">
                <span>Email Address</span>

                <div className="auth-input">
                  <Mail size={19} />
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@pharmacy.com"
                    autoComplete="email"
                  />
                </div>
              </label>

              <button className="auth-submit-button" type="submit">
                Send Reset Link
              </button>
            </>
          )}
        </form>
      </section>
    </main>
  );
}

export default ForgotPass;