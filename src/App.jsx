import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/navbar.css";
import "./assets/css/index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import chapu from "./assets/images/chapu.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Contact from "./Contact";
import team1 from "./assets/images/team1.png";
import team2 from "./assets/images/team2.png";
import team3 from "./assets/images/team3.png";
import team4 from "./assets/images/team4.png";
import team5 from "./assets/images/team5.png";
import team6 from "./assets/images/team6.png";

const achievements = [
  { title: "Proyectos Financiados", value: "+50", icon: "fas fa-chart-line" },
  {
    title: "Capital Desplegado",
    value: "$20,000 Millones MXN",
    icon: "fas fa-dollar-sign",
  },
  { title: "Años en el Mercado", value: "+30", icon: "fas fa-calendar-alt" },
  { title: "Clientes Satisfechos", value: "+25", icon: "fas fa-smile" },
  { title: "Regiones Atendidas", value: "5+", icon: "fas fa-globe" },
];

const transactions = [
  {
    img: "./assets/images/mac.png",
    title: "Línea de Crédito con Banca de Desarrollo",
    description: "Para Hospitales Mac México.",
  },
  {
    img: "./assets/images/transaction2.jpg",
    title: "Expansión Industrial",
    description: "Capital para una planta de manufactura en Monterrey.",
  },
  {
    img: "./assets/images/transaction3.jpg",
    title: "Construcción Residencial",
    description: "Inversión en desarrollos habitacionales sostenibles.",
  },
  {
    img: "./assets/images/transaction4.jpg",
    title: "Logística y Transporte",
    description: "Financiamiento para flotas de transporte comercial.",
  },
  {
    img: "./assets/images/transaction5.jpg",
    title: "Educación Superior",
    description: "Capital para expansión de universidades privadas.",
  },
  {
    img: "./assets/images/transaction6.jpg",
    title: "Innovación Tecnológica",
    description: "Apoyo a startups de tecnología avanzada.",
  },
  {
    img: "./assets/images/transaction7.jpg",
    title: "Hospitales Privados",
    description: "Inversión en infraestructura hospitalaria.",
  },
  {
    img: "./assets/images/transaction8.jpg",
    title: "Comercio Minorista",
    description: "Capital para cadenas de supermercados.",
  },
  {
    img: "./assets/images/transaction9.jpg",
    title: "Turismo y Hotelería",
    description: "Financiamiento para resorts turísticos.",
  },
  {
    img: "./assets/images/transaction10.jpg",
    title: "Infraestructura Pública",
    description: "Apoyo a proyectos de infraestructura vial.",
  },
];

// Importar la imagen
import logoMxcBlanco from "./assets/images/logomxc-blanco.png";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 600, // Duración de animaciones
      easing: "ease-out-cubic",
      once: true, // Animar solo una vez
    });
    AOS.refreshHard(); // Asegura que detecte cambios dinámicos
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a href="#" className="navbar-brand"></a>
          <img
            src={logoMxcBlanco}
            alt="Logotipo de MXC Capital"
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
                <a href="#features" className="nav-link">
                  Oferta
                </a>
              </li>
              <li className="nav-item">
                <a href="#track" className="nav-link">
                  Track Record
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
      <header
        id="hero"
        className="hero_area text-center text-white"
        data-aos="fade-up"
      >
        <div className="container py-5">
          <h1 className="display-4">Bienvenido a MXC Capital</h1>
          <p className="lead">
            Innovamos el acceso al crédito y capital privado.
          </p>
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
            MXC Capital es una Banca de Inversión Independiente con amplía
            experiencia en levantamiento de capital con AFORES, transacciones
            públicas y privadas, emisiones de deuda en el mercado mexicano y
            levantamiento de capital privado. En MXC Capital, transformamos el
            acceso al capital mediante estrategias innovadoras y un equipo
            comprometido con el éxito de nuestros clientes.
          </p>
          <img
            src={logoMxcBlanco}
            alt="Logotipo de MXC Capital"
            className="logo-small"
          />
        </div>
      </section>
      {/* Equipo y Features Section */}
      {/* Equipo y Features Section */}
      <section id="team" className="text-center">
        <div className="container">
          <h2 data-aos="fade-up">Nuestro Equipo</h2>
          <div className="row">
            {[
              {
                name: "Luis Armando Alvarez",
                position: "Founding Managing Partner",
                img: team1,
                bio: "Luis lidera MXC Capital con una visión estratégica y un enfoque en innovación.",
              },
              {
                name: "Paulina Ezquerra San Martin",
                position: "Managing Partner",
                img: team2,
                bio: "Paulina tiene experiencia sobresaliente liderando IPOs en el sector de Fibras en México y BMV.",
              },
              {
                name: "Guillermo Del Camino",
                position: "Asociado",
                img: team3,
                bio: "Guillermo lidera el análisis para los proyectos de Banca de Inversión.",
              },
              {
                name: "Pedro Serrano",
                position: "Analista Senior",
                img: team4,
                bio: "Pedro apoya en la estructuración y ejecución de estrategias financieras complejas.",
              },
              {
                name: "Paulina Alvarez",
                position: "Analista Senior",
                img: team5,
                bio: "Paulina realiza análisis detallados para proyectos de inversión y mercados financieros.",
              },
              {
                name: "Juan Barreto",
                position: "Analista",
                img: team6,
                bio: "Juan gestiona tareas clave en proyectos de análisis y ejecución financiera.",
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
          <h2 data-aos="fade-up">Un equipo experimentado en:</h2>
          <div className="row">
            {[
              {
                icon: "fas fa-lightbulb",
                title: "Originación",
                description:
                  "Proyectos top con impacto estratégico y sostenible.",
              },
              {
                icon: "fas fa-cogs",
                title: "Estructura",
                description:
                  "Definimos y optimizamos estructuras transparentes.",
              },
              {
                icon: "fas fa-check-circle",
                title: "Ejecución",
                description: "No hacemos fumble. Nuestra reputación habla.",
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

      {/*  Track Record */}
      <section id="track" className="py-5 text-center bg-light">
        <div className="container">
          <h2 className="mb-5" data-aos="fade-up">
            Track Record
          </h2>
          <div className="row justify-content-center">
            {achievements.map((item, index) => (
              <div
                className="col-md-2 mx-3 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="track-card">
                  <i
                    className={`${item.icon} fa-3x mb-3`}
                    style={{ color: "#4facfe" }}
                  ></i>
                  <h3 className="track-value">{item.value}</h3>
                  <p className="track-title">{item.title}</p>
                </div>
              </div>
            ))}
            {/* Transacciones Representativas */}
            <div className="transactions mt-5">
              <h3 className="mb-4" data-aos="fade-up">
                Transacciones Representativas
              </h3>
              <div className="row">
                {transactions.map((transaction, index) => (
                  <div
                    className="col-md-4 mb-4"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                  >
                    <div className="transaction-card">
                      <img
                        src={transaction.img}
                        alt={transaction.title}
                        className="img-fluid transaction-img"
                      />
                      <div className="transaction-content p-3">
                        <h5 className="transaction-title">
                          {transaction.title}
                        </h5>
                        <p className="transaction-description">
                          {transaction.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                quote:
                  "MXC Capital me ayudó a llevar mi empresa al siguiente nivel.",
                name: "Juan Pérez",
              },
              {
                quote:
                  "La atención al cliente y los resultados fueron excepcionales.",
                name: "María Gómez",
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

      {/* Sección Columnas */}
      {/* Sección Columnas */}
      <section id="columns" className="py-5 text-center" data-aos="fade-up">
        <div className="container expanded-section">
          <h2 className="mb-5">Explora Más</h2>
          <div className="row justify-content-center">
            {[
              {
                title: "Capital Privado & CERPIS",
                icon: "fas fa-chart-line",
                details:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Deuda Estructurada",
                icon: "fas fa-users",
                details:
                  "Suspendisse potenti. Integer vehicula est non urna consequat.",
              },
              {
                title: "Bursatilizaciones de Cartera",
                icon: "fas fa-briefcase",
                details:
                  "Donec euismod augue non nulla vestibulum, id hendrerit leo.",
              },
              {
                title: "IPOs a través de BMV",
                icon: "fas fa-cogs",
                details: "Cras ut ligula id sapien fringilla ultricies.",
              },
              {
                title: "Deuda Quirografaría",
                icon: "fas fa-globe",
                details: "Praesent nec eros a orci ultrices varius.",
              },
            ].map((item, index) => {
              const [expanded, setExpanded] = useState(false);

              return (
                <div
                  className={`col-md-3 mx-3 mb-4 column-card-container ${
                    expanded ? "expanded" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100} // Configuración consistente
                  key={index}
                >
                  <div className="column-card p-4">
                    <i className={`${item.icon} fa-3x mb-3`}></i>
                    <h5 className="card-title">{item.title}</h5>
                    {!expanded && (
                      <button
                        className="btn-expand"
                        onClick={() => setExpanded(!expanded)}
                      >
                        <i className="fas fa-search"></i>
                      </button>
                    )}
                    {expanded && (
                      <div className="expanded-content">
                        <p>{item.details}</p>
                        <button
                          className="btn-close"
                          onClick={() => setExpanded(!expanded)}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section text-white">
        <div className="container">
          {/* Logotipo */}
          <div className="row justify-content-center mb-4">
            <div className="col-md-4 text-center">
              <img
                src={logoMxcBlanco}
                alt="Logotipo de MXC Capital"
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
              <p>Email: contacto@mxccapital.com.mx</p>
            </div>

            {/* Enlaces */}
            <div className="col-md-3">
              <h5>Enlaces</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#pimx" className="text-white text-decoration-none">
                    Acerca de PiMX
                  </a>
                </li>
                <li>
                  <a href="#equipo" className="text-white text-decoration-none">
                    Equipo
                  </a>
                </li>
                <li>
                  <a href="#track" className="text-white text-decoration-none">
                    Track Record
                  </a>
                </li>
              </ul>
            </div>

            {/* Alianzas */}
            <div className="col-md-3">
              <h5>Alianzas</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.pimx.com.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    PiMX Fondo de Deuda
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.crowdlink.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    Crowdlink
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.soporteimpulsa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    Soporte Impulsa
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.vepormas.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none"
                  >
                    VePorMás
                  </a>
                </li>
              </ul>
            </div>

            {/* Síguenos */}
            <div className="col-md-3">
              <h5>Síguenos</h5>
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Derechos Reservados */}
          <div className="row mt-4">
            <div className="col text-center">
              <p className="small">
                © 2025 MXC Capital. Todos los derechos reservados.
              </p>
            </div>
          </div>

          {/* Línea Inferior */}
          <div className="footer-bottom text-center mt-3">
            <hr className="footer-line" />
            <p className="footer-emoji">
              Construyendo tu éxito con nosotros 📈
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
      </Routes>
    </Router>
  );
};

export default App;
