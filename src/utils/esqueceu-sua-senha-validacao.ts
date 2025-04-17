import { z } from "zod"

export const esqueceuSuaSenhaValidacao = z.object({
  cpf: z.string()
    .length(14, { message: "O CPF deve ter 14 caracteres." })
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido." }),
})