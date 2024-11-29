import prisma from "../../connection/prisma";
import getDayDifference from "./borrow.utils";

const createBorrow = async (data: { memberId: string; bookId: string }) => {
  const member = await prisma.member.findUnique({
    where: {
      memberId: data?.memberId,
    },
  });

  if (!member) {
    throw new Error("Member not found");
  }

  const book = await prisma.book.findUnique({
    where: {
      bookId: data?.bookId,
    },
  });

  if (!book) {
    throw new Error("Book not found");
  }

  if (book?.availableCopies <= 0) {
    throw new Error("No available copies");
  }

  const result = await prisma.$transaction(async (tx) => {
    const borrow = await tx.borrowRecord.create({
      data,
    });

    await tx.book.update({
      where: {
        bookId: data?.bookId,
      },
      data: {
        availableCopies: book?.availableCopies - 1,
      },
    });

    return borrow;
  });

  return result;
};

const getOverdueBorrowRecords = async () => {
  const borrowRecords = await prisma.borrowRecord.findMany({
    include: {
      book: true,
      member: true,
    },
  });

  const result: {
    borrowId: string;
    bookTitle: string;
    borrowerName: string;
    overdueDays: number;
  }[] = [];

  borrowRecords.forEach((record) => {
    const daysDifference = getDayDifference(
      new Date(record?.borrowDate),
      new Date()
    );
    if (!record?.returnDate && daysDifference > 14) {
      result.push({
        borrowId: record?.borrowId,
        bookTitle: record?.book?.title,
        borrowerName: record?.member?.name,
        overdueDays: daysDifference - 14,
      });
    }
  });

  return result;
};

export const borrowServices = {
  createBorrow,
  getOverdueBorrowRecords,
};
