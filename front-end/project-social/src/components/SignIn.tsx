import React, { useState } from "react";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [user_login, setUserLogin] = useState("");
  const [user_password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_login, user_password, username }),
    });
    const data = await response.json();
    console.log(response);
    if (response.ok){ 
      console.log("Sigin successeful", data);
      navigate("/login");
    }
    else console.error("Sign in error: ", data);
  };

  return (
    <div className="signIn-page hiddeOver">
      <div className="about">
        <h1 className="logoLogin">
          <span className="text-success">M</span>usify
        </h1>
        <p>
          A new way to share your favorite lyrics
        </p>
      </div>
      <div className="signIn-box">
        <h3 className="card-title text-center mb-4 text-black">Sing in</h3>
        <form onSubmit={handleSubmit} className="text-black">
          <div className="input-group-signin text-black">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              // className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group-signin">
            <label htmlFor="user_login" className="form-label">
              User login
            </label>
            <input
              type="text"
              // className="form-control"
              id="user_login"
              value={user_login}
              onChange={(e) => setUserLogin(e.target.value)}
              required
            />
          </div>
          <div className="input-group-signin">
            <label htmlFor="user_password" className="form-label">
              Password
            </label>
            <input
              type="password"
              // className="form-control"
              id="user_password"
              value={user_password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button text-black">
            Enter
          </button>
        </form>
        <div className="text-center mt-3 signup-link text-black">
          <span>Already have a account? </span>
          <a href="/login">Log in</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
