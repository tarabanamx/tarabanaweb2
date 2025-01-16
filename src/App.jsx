// Este es el App.jsx de Website de Tarabaña enero 2025

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/navbar.css";
import "./assets/css/index.css";
import "./assets/css/login.css";
import "./assets/css/contact.css";
import "./assets/css/taproom.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Importar la imagen
import tarabanalogo from "./assets/images/tarabanalogo.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Tap from "./TapRoom";

import Contact from "./contact";
import team1 from "./assets/images/team1.png";
import team2 from "./assets/images/team2.png";
import team3 from "./assets/images/team3.png";
import team4 from "./assets/images/team4.png";
import team5 from "./assets/images/team5.png";
import team6 from "./assets/images/team6.png";
import contigo from "./assets/images/contigo.png";
import mac from "./assets/images/mac.png";
import totalplay from "./assets/images/totalplay.png";
import elektra from "./assets/images/elektra.png";
import fortem from "./assets/images/fortem.png";
import dila from "./assets/images/dila.png";
import TapRoom from "./TapRoom";

const beers = [
  {
    name: "Sílice",
    style: "Czech Pils",
    abv: "5.1%",
    ibu: "25",
    hops: "Saaz",
  },
  {
    name: "Magma",
    style: "Doble IPA",
    abv: "8.5%",
    ibu: "55",
    hops: "Citra, Mosaic",
  },
  {
    name: "Caliza",
    style: "Hazy IPA",
    abv: "5.2%",
    ibu: "30",
    hops: "Idaho 7, Centennial,..",
  },
  {
    name: "Chula Vista",
    style: "West Coast IPA",
    abv: "5.0%",
    ibu: "35",
    hops: "Amarillo, Centennial",
  },
  {
    name: "Brisa",
    style: "Session IPA",
    abv: "4.5%",
    ibu: "25",
    hops: "Simcoe, Chinook",
  },
];

const BeerCard = ({ beer }) => (
  <div className="beer-card" data-aos="fade-up">
    <div className="beer-card-content">
      <div className="beer-icon">
        <i className="fas fa-beer fa-3x"></i>
      </div>
      <h5 className="beer-name">{beer.name}</h5>
      <p className="beer-style">
        <strong>Estilo:</strong> {beer.style}
      </p>
      <p className="beer-abv">
        <strong>ABV:</strong> {beer.abv}
      </p>
      <p className="beer-ibu">
        <strong>IBUs:</strong> {beer.ibu}
      </p>
      <p className="beer-hops">
        <strong>Lúpulos:</strong> {beer.hops}
      </p>
    </div>
  </div>
);

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a href="#" className="navbar-brand"></a>
          <img
            src={tarabanalogo}
            alt="Logotipo de Tarabaña"
            className="logo-small"
          />

          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#hero" className="nav-link">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  Acerca de
                </a>
              </li>
              <li className="nav-item">
                <a href="#team" className="nav-link">
                  Equipo
                </a>
              </li>
              <li className="nav-item">
                <a href="#linea" className="nav-link">
                  Cervezas de Línea
                </a>
              </li>
              <li className="nav-item">
                <a href="/TapRoom" className="nav-link">
                  Tap Room
                </a>
              </li>

              <li className="nav-item">
                <a href="#history" className="nav-link">
                  Historia
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link">
                  Contacto
                </a>
              </li>

              <li className="nav-item">
                <a href="/login" className="btn btn-outline-light ms-3">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header id="hero" className="hero_area text-center text-white">
        <div className="container py-5">
          <h1 className="display-4">
            Bienvenido a Fábrica de Cervezas Tarabaña
          </h1>
          <p className="lead">Fabricamos cerveza buena para todos.</p>
          <button className="btn btn-light btn-lg mt-3">Conócenos</button>
        </div>
      </header>
      {/* About Section */}
      <section id="about" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4" data-aos="fade-up">
            Acerca de Nosotros
          </h2>
          <p className="text-muted" data-aos="fade-up">
            Fábrica de Cervezas Tarabaña nace en 2021 de un genuino interés por
            ayudar al sector de Cerveza Artesanal a seguir ofreciendo mejores
            cheves.
          </p>
          <img
            src={tarabanalogo}
            alt="Logotipo de Tarabana"
            className="logo-small"
          />
        </div>
      </section>
      {/* Equipo y Features Section */}
      <section id="team" className="text-center">
        <div className="container">
          <h2 data-aos="fade-up">Nuestro Equipo</h2>
          <div className="row">
            {[
              {
                name: "Paulina Zapfe",
                position: "Fundadores & Directora",
                img: team1,
                bio: ".",
              },
              {
                name: "Luis Alvarez",
                position: "Ventas & Finanzas",
                img: team2,
                bio: ".",
              },
              {
                name: "Daniel Rodriguez",
                position: "Head Brewer",
                img: team3,
                bio: ".",
              },
              {
                name: "Gris Guarneros",
                position: "Laboratorio",
                img: team4,
                bio: ".",
              },
              {
                name: "Paco Rojas",
                position: "Brewer",
                img: team5,
                bio: ".",
              },
              {
                name: "Emma",
                position: "Mascota",
                img: team6,
                bio: ".",
              },

              // Agrega más miembros según sea necesario
            ].map((member, index) => (
              <div
                className="col-md-4 col-lg-4 mb-4"
                key={index}
                data-aos="fade-up"
              >
                <div
                  className={`team-card ${member.expanded ? "expanded" : ""}`}
                  onClick={() => (member.expanded = !member.expanded)}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="img-fluid"
                  />
                  <h5>{member.name}</h5>
                  <p>{member.position}</p>
                  <button>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="expanded-content">
                    <p>{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-5">
          <h2 data-aos="fade-up">Nos enfocamos en Cervezas:</h2>
          <div className="row">
            {[
              {
                icon: "fas fa-book",
                title: "Clásicas",
                description: "Retomamos y mejoramos lo clásico.",
              },
              {
                icon: "fas fa-bolt",
                title: "Lupulosas",
                description: "Desde una Session hasta una Doble IPA.",
              },
              {
                icon: "fas fa-beer",
                title: "Para todos",
                description: "Calidad está en el detalle.",
              },
            ].map((feature, index) => (
              <div
                className="col-md-4 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="feature-card">
                  <i className={feature.icon}></i>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  Seccion Chelas de linea  */}
      <section id="linea" className="linea-section">
        <div className="container">
          <h2 data-aos="fade-up">Cervezas de Línea</h2>
          <div className="beer-grid">
            {beers.map((beer, index) => (
              <BeerCard key={index} beer={beer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section en otro view */}
      {/*  Testimonials  */}
      <section
        id="testimonials"
        className="py-5 bg-dark text-white text-center"
        data-aos="fade-up"
      >
        <div className="container">
          <h2 className="mb-4">Testimonios</h2>
          <div className="row">
            {[
              {
                quote: "Magma (la doble IPA) está en otro nivel.",
                name: "Fernando Legorreta",
              },
              {
                quote:
                  "Gracias a Tarabaña me adentré al mundo de Cerveza Artesanal.",
                name: "Juan Pa Vargas",
              },
            ].map((testimonial, index) => (
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 100} // Sin retrasos excesivos
                key={index}
              >
                <blockquote className="blockquote">
                  <p>"{testimonial.quote}"</p>
                  <footer className="blockquote-footer">
                    {testimonial.name}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Sección Historia */}
      {/* Sección Historia */}
      <section id="history" className="history-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            Nuestra Historia
          </h2>
          <div className="timeline">
            {[
              {
                year: "2021",
                title: "Fundación",
                description:
                  "Comenzamos con la visión de revolucionar la cerveza artesanal.",
              },
              {
                year: "2022",
                title: "Primeras Cervezas",
                description:
                  "Comenzamos a fabricar primeros Lotes de American Lager.",
              },
              {
                year: "2023",
                title: "Redirección",
                description: "Cambiamos el modelo, enfocado 100% en calidad.",
              },
              {
                year: "2024",
                title: "Primeras Medallas ",
                description:
                  "Ganamos las primeras medallas en Aro Rojo y Cerveza México (3 Platas).",
              },
            ].map((item, index) => (
              <div className="timeline-item" key={index} data-aos="fade-up">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-box">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
                {index < 3 && <div className="timeline-arrow"></div>}
              </div>
            ))}
          </div>
          <div className="lighting-animation"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section text-white">
        <div className="container">
          {/* Logotipo */}
          <div className="row justify-content-center mb-4">
            <div className="col-md-4 text-center">
              <img
                src={tarabanalogo}
                alt="Logotipo de Tarabana"
                className="footer-logo"
              />
            </div>
          </div>

          {/* Información Principal */}
          <div className="row">
            {/* Contacto */}
            <div className="col-md-3">
              <h5>Contacto</h5>
              <p>Tel: +52 123 456 7890</p>
              <p>Email: hola@tarabana.mx</p>
            </div>

            {/* Enlaces */}
            <div className="col-md-3">
              <h5>Enlaces</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#linea" className="text-white text-decoration-none">
                    Cervezas de Línea
                  </a>
                </li>
                <li>
                  <a href="#equipo" className="text-white text-decoration-none">
                    Equipo
                  </a>
                </li>
                <li>
                  <a
                    href="#history"
                    className="text-white text-decoration-none"
                  >
                    Historia
                  </a>
                </li>
                <li>
                  <a
                    href="/TapRoom"
                    className="text-white text-decoration-none"
                  >
                    Tap Room
                  </a>
                </li>
              </ul>
            </div>

            {/* Alianzas */}
            <div className="col-md-3">
              <h5>También estamos</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.untapped.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    Untapped
                  </a>
                </li>
              </ul>
            </div>

            {/* Síguenos */}
            {/* Síguenos */}
            <div className="col-md-3">
              <h5>Síguenos</h5>
              <a
                href="https://www.facebook.com/tarabana.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/tarabana.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Derechos Reservados */}
          <div className="row mt-4">
            <div className="col text-center">
              <p className="small">
                © 2025 Compañía Cervecera Tierra Mojada S.A.P.I de C.V. Todos
                los derechos reservados.
              </p>
            </div>
          </div>

          {/* Línea Inferior */}
          <div className="footer-bottom text-center mt-3">
            <hr className="footer-line" />
            <p className="footer-emoji">
              Desarrollado por{" "}
              <a
                href="https://www.linkedin.com/in/luis-armando-alvarez-zapfe-201217137/?originalSubdomain=mx"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4facfe", textDecoration: "none" }}
              >
                Luis Armando Alvarez Zapfe
              </a>{" "}
              con{"  "}
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4facfe", textDecoration: "none" }}
              >
                React.js
              </a>{" "}
              <i className="fab fa-react"></i>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/TapRoom" element={<TapRoom />} />
      </Routes>
    </Router>
  );
};

export default App;
