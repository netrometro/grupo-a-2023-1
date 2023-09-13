import { userDTO } from "../dto/userDTO";
import prisma from "../prisma/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function createUser(input: userDTO) {
  const { name, email, password } = input;
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export async function login(body: userDTO) {
  const { email, password } = body;

  const user = await prisma.user.findFirst({
    where: { email },
  });
  if (!user) {
    throw new Error("user not found");
  }

  const verify = await bcrypt.compare(password, user.password);
  if (!verify) {
    throw new Error("wrong credentials");
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET ?? "", {
    expiresIn: "1h",
  });

  return { user, token };
}

export async function listUser(input: Number) {
  const user = await prisma.user.findFirst({
    where: { id: Number(input) },
  });
  if (!user) {
    throw new Error("user not found");
  }

  return user;
}

export async function listUsers() {
  const user = await prisma.user.findMany();
  return user;
}

export async function updateUser(id: Number, body: userDTO) {
  const user = await prisma.user.findFirst({
    where: { id: Number(id) },
  });
  if (!user) {
    throw new Error("user not found");
  }

  const { name, email } = body;

  const update = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      email: email,
      name: name,
    },
  });
}

export async function deleteUser(input: Number) {
  const id = input;
  const user = await prisma.user.findFirst({
    where: {
      id: Number(id),
    },
  });
  if (!user) {
    throw new Error("user not found");
  }
  const deleteUser = await prisma.user.delete({
    where: user,
  });

  return deleteUser;
}

export async function addAdress(id: number, endereco: number) {
  const userId = Number(id);
  const enderecoId = Number(endereco);
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });
  if (!user) {
    throw new Error("user not found");
  }
  const newAdress = await prisma.user
    .update({
      where: { id: userId },
      data: { endereco: enderecoId },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function getUserAdress(id: number) {
  const user = await prisma.user.findFirst({
    where: { id: Number(id) },
  });
  if (!user) {
    throw new Error("user not found");
  }
  const adressId = user.endereco;
  const adress = await prisma.endereco.findFirst({
    where: { id: Number(adressId) },
  });
  return adress;
}
