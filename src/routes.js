import { Router } from "express";
import authMiddleware from "./app/middlewares/auth";
import SessionController from "./app/controllers/SessionController";
import StudentsController from "./app/controllers/StudentsController";

const routes = new Router();

routes.post("/session", SessionController.store);
routes.use(authMiddleware);
routes.post("/student", StudentsController.store);

export default routes;
