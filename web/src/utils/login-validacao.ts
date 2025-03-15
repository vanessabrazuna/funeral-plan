import { z } from "zod"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const loginValidacao = z.object({
  email: z.string()
    .min(1, { message: "O e-mail é obrigatório" })
    .regex(emailRegex, { message: 'Endereço de e-mail inválido' })
    .transform((email) => email.toLowerCase()),
  password: z.string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
})