import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.css";

function Login() {
  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Autenticacao
    console.log("Login:", userLogin, "Senha:", password);
  };

  return (
    <>
      <div className="login-page bg-white">
        <h1 className="logoLogin"><span className="text-success">S</span>ocial</h1>
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="userLogin">Usuário</label>
              <input
                type="text"
                id="userLogin"
                value={userLogin}
                onChange={(e) => setUserLogin(e.target.value)}
                placeholder="Digite seu usuário"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>
          <div className="signup-link">
            <span>Não tem uma conta? </span>
            <Link to="/signin">Cadastre-se</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
