import express from "express";
import routes from "./routes";
import "./database";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use("/gympoint", routes);
  }
}

export default new App().server;
