"use server"

import { LoginSchema } from "@/schemas"
import * as z from "zod"


export const login = async (value: z.infer<typeof LoginSchema>) => {
    const validatedFiled = LoginSchema.safeParse(value)
    
    if(!validatedFiled.success){
        return {error: "Введены не верные данные"}
    }

    return {succsess: "Email подтвржден"}
}