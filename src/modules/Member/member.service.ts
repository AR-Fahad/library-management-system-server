import AppError from "../../classes/AppError";
import prisma from "../../connection/prisma";
import { TMember } from "./member.interface";

const createMember = async (data: TMember) => {
  const result = await prisma.member.create({
    data,
  });

  return result;
};

const getAllMembers = async () => {
  const result = await prisma.member.findMany();

  return result;
};

const getMember = async (memberId: string) => {
  const result = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });

  if (!result) {
    throw new AppError(404, "Member not found");
  }

  return result;
};

const updateMember = async (memberId: string, data: Partial<TMember>) => {
  const member = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });

  if (!member) {
    throw new AppError(404, "Member not found");
  }

  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data,
  });

  return result;
};

const deleteMember = async (memberId: string) => {
  const member = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });

  if (!member) {
    throw new AppError(404, "Member not found");
  }

  const result = await prisma.member.delete({
    where: {
      memberId,
    },
  });

  return result;
};

export const memberServices = {
  createMember,
  getAllMembers,
  getMember,
  updateMember,
  deleteMember,
};
