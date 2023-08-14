import { Router } from "express";
import { readdirSync } from "fs";
import { _dirname } from "../utils/functions.js";
const router = Router();

/**
 * 
 * este archivo tiene logica de un cargador de rutas automatico
 * por lo que, si se crea un archivo en esta carpeta 
 * y no se exporta un router, se genera error
 * 
*/


const cleanFile = (fileName) => {
  const file = fileName.split(".").shift();
  return file;
};

const PATH_ROUTERS = _dirname(import.meta.url);
const filesNames = readdirSync(PATH_ROUTERS);

filesNames.forEach(async (fileName) => {
  const cleanName = cleanFile(fileName);
  if (cleanName === "index") return;
  
  const moduleRouter = await import(`./${fileName}`);
  router.use(`/${cleanName}`, moduleRouter.router);
  console.log(cleanName);
});

export { router };