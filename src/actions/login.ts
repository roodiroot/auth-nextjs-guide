"use server";

import * as z from "zod";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";

export const login = async (value: z.infer<typeof LoginSchema>) => {
  const validatedFiled = LoginSchema.safeParse(value);

  if (!validatedFiled.success) {
    return { error: "Введены не верные данные" };
  }

  const { email, password } = validatedFiled.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Ошибка авторизации" };
        default:
          return { error: "Что то пошло не так" };
      }
    }

    throw error;
  }
};
