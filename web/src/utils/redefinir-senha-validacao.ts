import { z } from "zod"

export const redefinirSenhaValidacao = z.object({
  senha: z.string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
  confirmarSenha: z.string()
})
.refine((data) => data.senha === data.confirmarSenha, {
  message: "As senhas precisam coincidir",
  path: ["confirmarSenha"],
})
