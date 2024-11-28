import { Router } from "express";
import bookRouter from "../modules/Book/book.routes";
import memberRouter from "../modules/Member/member.routes";

const appRouter = Router();

const appRoutes: { path: string; router: Router }[] = [
  {
    path: "/books",
    router: bookRouter,
  },
  {
    path: "/members",
    router: memberRouter,
  },
];

appRoutes.forEach((route) => appRouter.use(route?.path, route?.router));

export default appRouter;
