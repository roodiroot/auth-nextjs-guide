import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Введите email"
    }),
    password: z.string().min(1, {message: "Пароль должен быть"})
})
export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Введите email"
    }),
    password: z.string().min(6, {message: "Минимум 6 символов"}),
    name: z.string().min(1, {
        message: "Введите имя"
    })
})