import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const updateForm = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    // Replace this with your backend login API.
    console.log("Login:", form);

    navigate("/dashboard");
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
          <h2>Smarter pharmacy inventory starts here.</h2>
          <p>
            Monitor stock, prevent medicine expiry, and make better pharmacy
            decisions with AI-powered insights.
          </p>
        </div>

        <p className="auth-brand-footer">
          Better inventory. Safer communities.
        </p>
      </section>

      <section className="auth-form-panel">
        <form className="auth-card" onSubmit={handleSubmit}>
          <div className="auth-heading">
            <h2>Welcome back</h2>
            <p>Sign in to access your pharmacy dashboard.</p>
          </div>

          {error && <p className="auth-error">{error}</p>}

          <label className="auth-field">
            <span>Email Address</span>

            <div className="auth-input">
              <Mail size={19} />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={updateForm}
                placeholder="you@pharmacy.com"
                autoComplete="email"
              />
            </div>
          </label>

          <label className="auth-field">
            <span>Password</span>

            <div className="auth-input">
              <LockKeyhole size={19} />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={updateForm}
                placeholder="Enter your password"
                autoComplete="current-password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </label>

          <div className="auth-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>

            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button className="auth-submit-button" type="submit">
            Login
          </button>

          <p className="auth-help-text">
            Need help? Contact your pharmacy administrator.
          </p>
        </form>
      </section>
    </main>
  );
}

export default Login;