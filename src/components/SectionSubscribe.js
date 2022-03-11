// Styles
import { useState } from "react";
import "./SectionSubscribe.scss";

export default function SectionSubscribe() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // Regex for the email test
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const resetValidation = () => {
    setSuccess("");
    setError("");
    setEmail("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    // If there is NOT a email state value stored this function with return.
    if (!email) return;

    // Validation of the email
    if (emailValidation.test(email)) {
      setSuccess(true);
    } else {
      setError(true);
    }

    //Reset the entire validation after 1 secs
    setTimeout(() => {
      resetValidation();
    }, 1000);
  };
  return (
    <section className="subscribe">
      <div className="container">
        <h2 className="center">Subscribe to get the best deals</h2>

        {/* Removed the default validation so I could add mine */}

        <form className="email-form spacer" onSubmit={handleSubmit} noValidate>
          <div className="input">
            <label htmlFor="email" className="visually-hidden">
              Enter yor email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              //   Updates state whenever you type in input
              onChange={e => setEmail(e.target.value)}
              // sets the value to current state
              value={email}
            />
            {error && (
              <p className={error ? "error" : ""}>
                Please enter a valid email address!
              </p>
            )}
            {success && (
              <p className={success ? "success" : ""}>
                Thank you for subscribing!
              </p>
            )}
          </div>

          <button className="btn" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
