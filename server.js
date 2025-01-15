import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno

const app = express();
const PORT = 5002;

// Configura SendGrid usando la clave API del archivo .env
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middlewares
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Cambia esto en producción
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Ruta para manejar el envío del formulario
app.post("/send-email", async (req, res) => {
  const { nombre, apellidoPaterno, apellidoMaterno, empresa, rfc, busco } =
    req.body;

  if (
    !nombre ||
    !apellidoPaterno ||
    !apellidoMaterno ||
    !empresa ||
    !rfc ||
    !busco
  ) {
    console.error("Faltan datos requeridos:", req.body);
    return res.status(400).send("Por favor, completa todos los campos.");
  }

  const msg = {
    to: "luis@crowdlink.mx",
    from: "lalvarezzapfe@gmail.com",
    subject: "Nueva Solicitud de Contacto",
    text: `
      Se ha recibido una nueva solicitud de contacto:

      Nombre: ${nombre}
      Apellido Paterno: ${apellidoPaterno}
      Apellido Materno: ${apellidoMaterno}
      Empresa: ${empresa}
      RFC: ${rfc}
      Busco: ${busco}
    `,
  };

  try {
    console.log("Enviando correo con datos:", msg);
    await sgMail.send(msg);
    res.status(200).send("Correo enviado correctamente.");
  } catch (error) {
    console.error(
      "Error al enviar correo:",
      error.response?.body || error.message
    );
    res.status(500).send("Hubo un error al enviar el correo.");
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
