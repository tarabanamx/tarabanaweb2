import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno desde el archivo .env

const app = express();
const PORT = process.env.PORT || 5002; // Usa el puerto de .env o el predeterminado 5002

// Configura SendGrid usando la clave API desde .env
if (!process.env.SENDGRID_API_KEY) {
  console.error("ERROR: La clave API de SendGrid no está configurada.");
  process.exit(1); // Termina el proceso si falta la clave
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middlewares
app.use(bodyParser.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173", // Cambia esto en producción
    methods: 
