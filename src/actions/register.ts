"use server";

import * as z from "zod";
import bcrypt from "bcrypt";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (value: z.infer<typeof RegisterSchema>) => {
  const validatedFiled = RegisterSchema.safeParse(value);

  if (!validatedFiled.success) {
    return { error: "Введены не верные данные" };
  }

  const { name, email, password } = validatedFiled.data;

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Этот email уже зарегестрирован" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return { succsess: "Регестрация успешна" };
};
