import { Server } from "http";
import app from "./app";

const port = process.env?.port || 5000;

let server: Server;

const main = () => {
  server = app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
};

main();
