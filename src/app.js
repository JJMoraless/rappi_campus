import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./routes/index.js";

const app = express();

// Midlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api/rappi-campus", router);

// Not found
app.get("*", (req, res) => {
  res.send("404 | route not found");
});

export default app;
