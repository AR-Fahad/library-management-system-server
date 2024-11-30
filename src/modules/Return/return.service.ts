import AppError from "../../classes/AppError";
import prisma from "../../connection/prisma";

const returnBook = async (borrowId: string) => {
  const borrow = await prisma.borrowRecord.findUnique({
    where: {
      borrowId,
    },
    include: {
      book: true,
    },
  });

  if (!borrow) {
    throw new AppError(404, "Borrow record not found");
  }

  if (borrow?.returnDate) {
    throw new AppError(409, "Book already returned");
  }

  await prisma.$transaction(async (tx) => {
    await tx.borrowRecord.update({
      where: {
        borrowId,
      },
      data: {
        returnDate: new Date().toISOString(),
      },
    });

    await tx.book.update({
      where: {
        bookId: borrow?.bookId,
      },
      data: {
        availableCopies: borrow?.book?.availableCopies + 1,
      },
    });
  });
};

export const returnServices = {
  returnBook,
};
