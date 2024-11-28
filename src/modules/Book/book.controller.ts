import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bookServices } from "./book.service";

const createBook = catchAsync(async (req, res) => {
  const result = await bookServices.createBook(req?.body);

  sendResponse(res, {
    success: true,
    status: 201,
    message: "Book created successfully",
    data: result,
  });
});

const getAllBooks = catchAsync(async (req, res) => {
  const result = await bookServices.getAllBooks();

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Books retrieved successfully",
    data: result,
  });
});

const getBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await bookServices.getBook(bookId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book retrieved successfully",
    data: result,
  });
});

const updateBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await bookServices.updateBook(bookId, req?.body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book updated successfully",
    data: result,
  });
});

const deleteBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;

  const result = await bookServices.deleteBook(bookId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book successfully deleted",
    // data: result,
  });
});

export const bookControllers = {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
};
