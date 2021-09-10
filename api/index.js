import ruta from "./router";
import express from "express";

const app = express();


app.use(ruta)

const PORT = 5000;

app.listen(PORT, console.log("Servidor corriendo en el puerto:", PORT));