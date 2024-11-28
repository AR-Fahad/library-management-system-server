import { Router } from "express";
import bookRouter from "../modules/Book/book.routes";

const appRouter = Router();

const appRoutes: { path: string; router: Router }[] = [
  {
    path: "/books",
    router: bookRouter,
  },
];

appRoutes.forEach((route) => appRouter.use(route?.path, route?.router));

export default appRouter;
