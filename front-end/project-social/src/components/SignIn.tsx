import React, { useState } from "react";
import "./SignIn.css";

function SignIn() {
  const [user_login, setUserLogin] = useState("");
  const [user_password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/social/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_login, user_password, username }),
    });
    const data = await response.json();
    if (response.ok) console.log("User created", data);
    else console.error("Sign in error: ", data);
  };

  return (
    <div className="signIn-page hiddeOver">
      <h1 className="logoLogin">
        <span className="text-success">S</span>ocial
      </h1>
      <div className="signIn-box">
        <h3 className="card-title text-center mb-4">Cadastre-se</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group-signin">
            <label htmlFor="username" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Digite seu nome"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group-signin">
            <label htmlFor="user_login" className="form-label">
              Usuário
            </label>
            <input
              type="text"
              className="form-control"
              id="user_login"
              placeholder="Escolha um usuário"
              value={user_login}
              onChange={(e) => setUserLogin(e.target.value)}
              required
            />
          </div>
          <div className="input-group-signin">
            <label htmlFor="user_user_password" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="user_password"
              placeholder="Digite sua senha"
              value={user_password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Cadastrar
          </button>
        </form>
        <div className="text-center mt-3 signup-link">
          <span>Já tem uma conta? </span>
          <a href="/login">Entrar</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
