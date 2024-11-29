import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { borrowServices } from "./borrow.service";

const createBorrow = catchAsync(async (req, res) => {
  const result = await borrowServices.createBorrow(req?.body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book borrowed successfully",
    data: result,
  });
});

const getOverdueBorrowRecords = catchAsync(async (req, res) => {
  const result = await borrowServices.getOverdueBorrowRecords();

  sendResponse(res, {
    success: true,
    status: 200,
    message: result?.length
      ? "Overdue borrow list fetched"
      : "No overdue books",
    data: result,
  });
});

export const borrowControllers = {
  createBorrow,
  getOverdueBorrowRecords,
};
