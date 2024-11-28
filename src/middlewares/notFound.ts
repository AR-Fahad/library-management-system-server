import { NextFunction, Request, Response } from "express";
import sendResponse from "../utils/sendResponse";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  sendResponse(res, {
    success: false,
    status: 404,
    message: "No routes found",
  });
};

export default notFound;
