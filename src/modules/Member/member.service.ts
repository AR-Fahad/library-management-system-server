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
  const result = await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

  return result;
};

const updateMember = async (memberId: string, data: Partial<TMember>) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data,
  });

  return result;
};

const deleteMember = async (memberId: string) => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

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
