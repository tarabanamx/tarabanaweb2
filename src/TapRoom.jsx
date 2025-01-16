import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/taproom.css";
import { Link } from "react-router-dom";

// Importar la imagen del logo y el GIF animado
import logoTara from "./assets/images/tarabanalogo.png";
import beerGif from "./assets/images/beer.gif";

const TapRoom = () => {
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-12-31"); // Cambiar la fecha del evento
    const interval = setInterval(() => {
      const currentDate = new Date();
      const diffTime = targetDate - currentDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysRemaining(diffDays);
    }, 1000);

    return () => clearInterval(interval); // Limpiar el intervalo
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <img
            src={logoTara}
            alt="Logotipo de Tarabana"
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

      {/* Tap Room Section */}
      <section className="taproom-section d-flex justify-content-center align-items-center">
        <div className="taproom-box">
          <img src={beerGif} alt="Beer Animation" className="beer-gif" />
          <h2>Tap Room Apertura</h2>
          <div className="countdown-box">
            <p className="countdown-text">¡Faltan {daysRemaining} días!</p>
          </div>
          <p>Únete a nosotros para celebrar la apertura de nuestro Tap Room.</p>
          <button className="btn-join">¡Reserva tu lugar!</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white text-center">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Compañía Cervecera Tierra Mojada
            S.A.P.I de C.V. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TapRoom;
