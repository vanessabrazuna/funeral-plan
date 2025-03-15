import { z } from "zod"

const phoneRegex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/
const cepRegex = /^\d{5}-?\d{3}$/
const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/
const cnpjRegex = /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/

const addressSchema = z.object({
  street_address: z.string().min(3, "Endereço deve ter no mínimo 3 caracteres"),
  number_address: z.string().min(3, "Número é obrigatório"),
  district: z.string().min(1, "Bairro é obrigatório"),
})

const editarMeuPerfilValidacao = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres"),

  cpf_cnpj: z
    .string()
    .refine((value) => cpfRegex.test(value) || cnpjRegex.test(value), "CPF ou CNPJ inválido"),

  email: z
    .string()
    .email("Email inválido")
    .min(5, "Email deve ter no mínimo 5 caracteres"),

  phone: z.string().regex(phoneRegex, "Telefone celular inválido"),

  cep: z.string().regex(cepRegex, "CEP inválido"),

  address: addressSchema,

  data_nascimento: z
    .instanceof(Date)
    .refine((val) => !isNaN(val.getTime()), { message: 'Data inválida' }),
})

type FormDataSchema = z.infer<typeof editarMeuPerfilValidacao>
export { editarMeuPerfilValidacao, addressSchema, type FormDataSchema }
