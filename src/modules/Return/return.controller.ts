import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { returnServices } from "./return.service";

const returnBook = catchAsync(async (req, res) => {
  await returnServices.returnBook(req?.body?.borrowId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book returned successfully",
  });
});

export const returnControllers = {
  returnBook,
};
