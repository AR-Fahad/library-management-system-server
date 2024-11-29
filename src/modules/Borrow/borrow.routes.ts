import { Router } from "express";
import { borrowControllers } from "./borrow.controller";

const borrowRouter = Router();

borrowRouter.post("/", borrowControllers.createBorrow);

borrowRouter.get("/overdue", borrowControllers.getOverdueBorrowRecords);

export default borrowRouter;
