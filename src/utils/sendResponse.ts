import { Response } from "express";

type TResInfo = {
  success: boolean;
  status: number;
  message: string;
  data?: any;
};

const sendResponse = (res: Response, resInfo: TResInfo) => {
  res.status(resInfo?.status).json(resInfo);
};

export default sendResponse;
