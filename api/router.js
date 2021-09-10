import express from "express";
import { raiz, cliente, productos } from "./contrller";

const ruta = express.Router();

ruta.get("/", raiz);
ruta.get("/clientes", cliente)
ruta.get("/productos", productos)


export default ruta;

