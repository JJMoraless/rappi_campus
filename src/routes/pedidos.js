import { Router } from "express";
import { pedidosGet } from "../controllers/pedidos.js";

const router = Router();
router.get("/", pedidosGet);

export { router };
