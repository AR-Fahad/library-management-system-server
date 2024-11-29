import { Router } from "express";
import bookRouter from "../modules/Book/book.routes";
import memberRouter from "../modules/Member/member.routes";
import borrowRouter from "../modules/Borrow/borrow.routes";
import returnRouter from "../modules/Return/return.routes";

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
  {
    path: "/borrow",
    router: borrowRouter,
  },
  {
    path: "/return",
    router: returnRouter,
  },
];

appRoutes.forEach((route) => appRouter.use(route?.path, route?.router));

export default appRouter;
