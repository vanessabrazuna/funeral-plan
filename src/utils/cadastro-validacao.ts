import { z } from "zod"

export const cadastroValidacao = z.object({
  name: z.string().min(3, { message: 'O nome completo é obrigatório' }),

  cpf_cnpj: z
    .string()
    .refine((value) => {
      const cpfRegex = /^\d{11}$/
      const cnpjRegex = /^\d{14}$/
      return cpfRegex.test(value) || cnpjRegex.test(value)
    }, { message: "CPF/CNPJ inválido" }),

  email: z.string().email({ message: "Endereço de e-mail inválido" }),

  birthdate: z.date().refine((date) => date >= new Date(1900, 0, 1) && date <= new Date(), {
    message: "Data de nascimento inválida",
  }),

  phone: z.string().refine((value) => {
    const phoneRegex = /^\(?\d{2}\)?[\s-]?9?\d{4}[-\s]?\d{4}$/
    return phoneRegex.test(value)
  }, { message: 'Número de telefone inválido' }),

  phone_fixo: z.string().optional(),

  rg: z.string().optional(),
  cep: z
    .string()
    .regex(/^\d{5}-?\d{3}$/, { message: 'CEP inválido' }),

  address: z.object({
    street_address: z.string().min(3, { message: "Endereço é obrigatório" }),
    number_address: z.string().min(1, { message: "Número do endereço é obrigatório" }),
    complement: z.string().optional(),
    reference_point: z.string().optional(),
    district: z.string().min(2, { message: "Bairro é obrigatório" }),
    city: z.string().optional(),
    state: z.string().optional(),
    country: z.string().optional(),
  }),

  // password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
})