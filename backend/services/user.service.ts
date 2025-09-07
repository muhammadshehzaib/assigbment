import prisma from "../config/prisma.js";

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const createUser = async (data: { name: string; email: string; password: string }) => {
  return await prisma.user.create({ data });
};
