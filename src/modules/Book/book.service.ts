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
  const result = await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });

  return result;
};

const updateBook = async (bookId: string, data: Partial<TBook>) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });

  const result = await prisma.book.update({
    where: {
      bookId,
    },
    data,
  });

  return result;
};

const deleteBook = async (bookId: string) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId,
    },
  });

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
