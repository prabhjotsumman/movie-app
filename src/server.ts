import express, { Request, Response } from "express";
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

import connectDB from "./config/db";
import actorRoutes from "./routes/actorRoutes";
import producerRoutes from "./routes/producerRoutes";
import movieRoutes from "./routes/movieRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

connectDB();

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("IMDB Clone Backend is Running!");
});

app.use("/api/actors", actorRoutes);
app.use("/api/producers", producerRoutes);
app.use("/api/movies", movieRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
