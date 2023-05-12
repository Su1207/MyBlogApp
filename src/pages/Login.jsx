import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="App">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="Log-in" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="surajmaheshwari159@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("Signup")}
        >
          Don't have an account?{" "}
          <span style={{ color: "#0080ff" }}>Register</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
