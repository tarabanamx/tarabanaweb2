import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación
    alert(`Bienvenido, ${username}`);
  };

  return (
    <div className="login-container text-center bg-light py-5">
      <h2>Iniciar Sesión</h2>
      <form className="form-signin mx-auto mt-4" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
