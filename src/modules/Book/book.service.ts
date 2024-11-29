import prisma from "../../connection/prisma";
import { TBook } from "./book.interface";

const createBook = async (data: TBook) => {
  const result = await prisma.book.create({
    data,
  });

  return result;
};

const getAllBooks = async () => {
  const result = await prisma.book.findMany();

  return result;
};

const getBook = async (bookId: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  if (!result) {
    throw new Error("Book not found");
  }

  return result;
};

const updateBook = async (bookId: string, data: Partial<TBook>) => {
  const book = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  if (!book) {
    throw new Error("Book not found");
  }

  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data,
  });

  return result;
};

const deleteBook = async (bookId: string) => {
  const book = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  if (!book) {
    throw new Error("Book not found");
  }

  const result = await prisma.book.delete({
    where: {
      bookId,
    },
  });

  return result;
};

export const bookServices = {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
};
