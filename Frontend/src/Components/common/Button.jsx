
import '../../styles/button.css';

function Button({
  children = "Login",
  type = "submit",
  isLoading = false,
  disabled = false,
  onClick,
}) {
  return (
    <button
      type={type}
      className="login-button"
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? "Logging in..." : children}
    </button>
  );
}

export default Button;