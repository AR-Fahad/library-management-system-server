import { Server } from "http";
import app from "./app";

const port = process.env.PORT || 5000;

let server: Server;

const main = () => {
  server = app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
};

main();

// for unhandledRejection (asynchronous)
process.on("unhandledRejection", () => {
  console.log("unhandledRejection is detected, shutting down the server...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// for uncaughtException (synchronous)
process.on("uncaughtException", () => {
  console.log("uncaughtException is detected, shutting down the server...");
  process.exit(1);
});
