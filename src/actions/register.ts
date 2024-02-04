"use server"

import * as z from "zod"

import { RegisterSchema } from "@/schemas"


export const register = async (value: z.infer<typeof RegisterSchema>) => {
    const validatedFiled = RegisterSchema.safeParse(value)
    
    if(!validatedFiled.success){
        return {error: "Введены не верные данные"}
    }

    return {succsess: "Email подтвржден"}
}