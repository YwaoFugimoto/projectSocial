import React, { useState } from "react";
import "./SignIn.css";

function SignIn() {
  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementa a lógica de cadastro
    console.log("Cadastro:", { userLogin, password, username });
  };

  return (
    <div className="signIn-page">
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
            <label htmlFor="userLogin" className="form-label">
              Usuário
            </label>
            <input
              type="text"
              className="form-control"
              id="userLogin"
              placeholder="Escolha um usuário"
              value={userLogin}
              onChange={(e) => setUserLogin(e.target.value)}
              required
            />
          </div>
          <div className="input-group-signin">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Digite sua senha"
              value={password}
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
