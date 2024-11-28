import { NextFunction, Request, Response } from "express";
import sendResponse from "../utils/sendResponse";

const globalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  sendResponse(res, {
    success: false,
    status: err?.status || 500,
    message: err?.name || err?.message || "Something went wrong",
  });
};

export default globalError;
