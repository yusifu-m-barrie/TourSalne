import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import serverless from "serverless-http";
import { connectDB } from "../server/_db.js";


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

// Connect DB once (cached)
app.use(async (_req, _res, next) => {
  await connectDB();
  next();
});

// Health
app.get("/api/health", (_req, res) => res.json({ ok: true }));

// Mounted routes detected from /server/routes
// Add your routes under /server/routes and mount them here.

export const config = {
  api: { bodyParser: true }
};

export default serverless(app);
