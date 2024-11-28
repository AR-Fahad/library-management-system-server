import { Router } from "express";
import { bookControllers } from "./book.controller";

const bookRouter = Router();

bookRouter.post("/", bookControllers.createBook);

bookRouter.get("/", bookControllers.getAllBooks);

bookRouter.get("/:bookId", bookControllers.getBook);

bookRouter.put("/:bookId", bookControllers.updateBook);

bookRouter.delete("/:bookId", bookControllers.deleteBook);

export default bookRouter;
