/*
  Warnings:

  - Made the column `borrowDate` on table `borrow_records` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "borrow_records" ALTER COLUMN "borrowDate" SET NOT NULL;
