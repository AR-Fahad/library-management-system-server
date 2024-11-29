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
    status: err?.status || 400,
    message: err?.message || err?.name || "Something went wrong",
  });
};

export default globalError;
