import { NextFunction, Request, Response } from "express";
import sendResponse from "../utils/sendResponse";

const globalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err?.name === "Error") {
    sendResponse(res, {
      success: false,
      status: err?.status || 500,
      message: err?.message || "Something went wrong",
    });
  } else {
    sendResponse(res, {
      success: false,
      status: err?.status || 400,
      message: err?.name || "Something went wrong",
    });
  }
};

export default globalError;
