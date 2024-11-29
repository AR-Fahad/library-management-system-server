import { Router } from "express";
import { returnControllers } from "./return.controller";

const returnRouter = Router();

returnRouter.post("/", returnControllers.returnBook);

export default returnRouter;
