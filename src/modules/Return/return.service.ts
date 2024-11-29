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
    throw new Error("Borrow record not found");
  }

  if (borrow?.returnDate) {
    throw new Error("Book already returned");
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
