import React, { useState } from 'react';
import "./Login.css";

function SignIn (){
  const [userLogin, setUserLogin] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementa a lógica de cadastro
    console.log('Cadastro:', { userLogin, password, username });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        background: "url('/path/to/your/background.jpg') no-repeat center center fixed",
        backgroundSize: 'cover'
      }}
    >
      <div className="card" style={{ width: '320px' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Cadastre-se</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="userLogin" className="form-label">Usuário</label>
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
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Senha</label>
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
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Nome</label>
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
            <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
          </form>
          <div className="text-center mt-3">
            <span>Já tem uma conta? </span>
            <a href="/login">Entrar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
