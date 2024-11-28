import express from "express";
import cors from "cors";
import appRouter from "./routes/routes";
import globalError from "./middlewares/globalError";
import notFound from "./middlewares/notFound";

const app = express();

// parser
app.use(express.json());
app.use(cors());

// app base route
app.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome to library management server" });
});

// app all routes
app.use("/api", appRouter);

// global error handle
app.use(globalError);

// no routes found
app.use(notFound);

export default app;
