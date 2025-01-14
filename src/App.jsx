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
            MXC CApital es una Banca de Inversión Independiente con amplía
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
      {/* Equipo Section */}
      <section id="team" className="py-5 text-center bg-dark text-white">
        <div className="container">
          <h2 className="mb-4" data-aos="fade-up">
            Nuestro Equipo
          </h2>
          <div className="row">
            {[
              {
                name: "Luis Armando Alvarez",
                position: "Founding Managing Partner",
                img: "./assets/images/team1.jpg",
                bio: "Luis lidera MXC Capital con una visión estratégica y un enfoque en innovación.",
              },
              {
                name: "Paulina Ezquerra San Martin",
                position: "Managing Partner",
                img: "./assets/images/team2.jpg",
                bio: "Paulina tiene experiencia sobresaliente liderando IPOs en Sector Fibras en México y BMV",
              },
              {
                name: "Guillermo Del Camino",
                position: "CTO",
                img: "./assets/images/team3.jpg",
                bio: "Guillermo lidera la tecnología, transformando procesos y creando soluciones innovadoras.",
              },
              {
                name: "Pedro Serrano",
                position: "CMO",
                img: "./assets/images/team4.jpg",
                bio: "María dirige nuestras estrategias de marketing y fortalece nuestra marca.",
              },
              {
                name: "Paulina Alvarez",
                position: "Analista Senior",
                img: "./assets/images/team5.jpg",
                bio: "Fernando analiza datos críticos para la toma de decisiones informadas.",
              },
              {
                name: "Juan Barreto",
                position: "Gerente de Proyectos",
                img: "./assets/images/team6.jpg",
                bio: "Sofía gestiona proyectos clave, asegurando su éxito y calidad.",
              },
            ].map((member, index) => (
              <div
                className="col-md-4 col-lg-4 mb-4"
                key={index}
                data-aos="fade-up"
              >
                <div
                  className="team-member"
                  onClick={() => alert(`Bio: ${member.bio}`)}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="img-fluid rounded-circle team-photo"
                  />
                  <h5 className="mt-3">{member.name}</h5>
                  <p>{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Oferta - Features Section */}
      <section id="features" className="py-5 text-center">
        <div className="container">
          <h2 className="mb-4">¿Por qué elegirnos?</h2>
          <div className="row">
            <div className="col-md-4">
              <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
              <h4>Seguridad</h4>
              <p className="text-muted">
                Tu información está protegida con estándares de seguridad.
              </p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-rocket fa-3x text-primary mb-3"></i>
              <h4>Rapidez</h4>
              <p className="text-muted">
                Procesos eficientes para tus necesidades financieras.
              </p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-thumbs-up fa-3x text-primary mb-3"></i>
              <h4>Confiabilidad</h4>
              <p className="text-muted">
                Cientos de clientes satisfechos nos respaldan.
              </p>
            </div>
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

      {/*   Seccion Columnas    */}
      <section id="columns" className="py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h2 className="mb-5">Explora Más</h2>
          <div className="row justify-content-center">
            {[
              { title: "Capital Privado & CERPIS", icon: "fas fa-chart-line" },
              { title: "Deuda Estructurada", icon: "fas fa-users" },
              {
                title: "Bursatilizaciones de Cartera",
                icon: "fas fa-briefcase",
              },
              { title: "IPOs a través de BMV", icon: "fas fa-cogs" },
              { title: "Deuda Quirografaría", icon: "fas fa-globe" },
            ].map((item, index) => (
              <div
                className="col-md-2 mx-3 mb-4"
                data-aos="fade-up"
                data-aos-delay={index * 100} // Configuración consistente
                key={index}
              >
                <div className="column-card p-3">
                  <i className={`${item.icon} fa-2x mb-3`}></i>
                  <h5>{item.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*   Footer  */}
      <footer className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Contacto</h5>
              <p>Tel: +52 123 456 7890</p>
              <p>Email: contacto@mxccapital.com.mx</p>
            </div>
            <div className="col-md-4">
              <h5>Enlaces</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#pimx" className="text-white text-decoration-none">
                    Acerca de PiMX
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-white text-decoration-none"
                  >
                    Oferta
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Enlaces</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#about" className="text-white text-decoration-none">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-white text-decoration-none"
                  >
                    Oferta
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
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
