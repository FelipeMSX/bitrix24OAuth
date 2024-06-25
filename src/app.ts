import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";

class App {
  public server:Express;
  public port:string;

  constructor() {
    this.port = process.env.PORT || "4000";
    this.server = express();
    // this.server.use(cors());
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    // this.server.use(routes);
    this.server.get("/", (req: Request, res: Response) => {
        res.send("Express + TypeScript Server");
      });


  } 

  start() {
    this.server.listen(this.port, () => {
        console.log(`[server]: Server is running at http://localhost:${this.port}`);
      });
  }
}

export default new App().server;