import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";
import { Link } from "react-router-dom";

// Importar la imagen
import logoMxcBlanco from "./assets/images/logomxc-blanco.png";

const Contact = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <img
            src={logoMxcBlanco}
            alt="Logotipo de MXC Capital"
            className="logo-small"
          />
          <Link to="/" className="navbar-brand"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Inicio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="contact-section text-white">
        <div className="container py-5">
          <h2 className="mb-4 text-center">Contáctanos</h2>
          <form className="row g-3 text-dark">
            <div className="col-md-6">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Apellido Paterno</label>
              <input
                type="text"
                className="form-control"
                placeholder="Apellido Paterno"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Apellido Materno</label>
              <input
                type="text"
                className="form-control"
                placeholder="Apellido Materno"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Nombre de Empresa</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre de Empresa"
                required
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Busco</label>
              <select className="form-select" required>
                <option value="Capital">Capital</option>
                <option value="Deuda">Deuda</option>
                <option value="Emisión Pública">Emisión Pública</option>
              </select>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white text-center">
        <div className="container">
          <p>
            © {new Date().getFullYear()} MXC Capital. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
