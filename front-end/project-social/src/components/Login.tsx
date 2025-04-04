import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [user_login, setUserLogin] = useState("");
  const [user_password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/users/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
      body: JSON.stringify({ user_login, user_password }),
    });
    const data = await response.json();
    console.log(response);
    if(response.ok) { 
      toast.success("Login successful", data);
      navigate("/home");
    }else {
      toast.error("Login error: ", data); 
    }
  };

  return (
    <>
      <div className="login-page hiddeOver">
        <div className="about">
          <h1 className="logoLogin">
            <span className="text-success">M</span>usify
          </h1>
          <p>A new way to share your favorite lyrics</p>
        </div>
        <div className="login-box text-black">
          <h2>Log in</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="user_login">User login</label>
              <input
                type="text"
                id="user_login"
                value={user_login}
                onChange={(e) => setUserLogin(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="user_password">Password</label>
              <input
                type="password"
                id="user_password"
                value={user_password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button text-black">
              Entrar
            </button>
            <ToastContainer />
          </form>
          <div className="signup-link">
            <span>Don't have a account? </span>
            <Link to="/signin">Sign in</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
