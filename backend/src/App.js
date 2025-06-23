import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";

// ✅ Corrected import path (lowercase 'routes')
import userRoutes from "./routes/users.routes.js"; // ✅ lowercase

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
  try {
    const connectionDb = await mongoose.connect(
      "mongodb+srv://ayushkumarsaini:ayush9876@marketplus360.qfzgh8c.mongodb.net/?retryWrites=true&w=majority&appName=marketplus360"
    );
    console.log(`MongoDB Connected: ${connectionDb.connection.host}`);
    server.listen(app.get("port"), () => {
      console.log(`Listening on port ${app.get("port")}`);
    });
  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1);
  }
};

start();
