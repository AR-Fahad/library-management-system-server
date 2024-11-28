import express from "express";
import cors from "cors";

const app = express();

// parser
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome to library management server" });
});

export default app;
