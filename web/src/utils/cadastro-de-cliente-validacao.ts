import { z } from "zod"

const phoneRegex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/
const cepRegex = /^\d{5}-?\d{3}$/
const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/
const cnpjRegex = /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/

const addressSchema = z.object({
  street_address: z.string().min(3, "Endereço deve ter no mínimo 3 caracteres"),
  number_address: z.string().optional(),
  complement: z.string().optional(),
  district: z.string().min(1, "Bairro é obrigatório"),
  reference_point: z.string().min(1, "Ponto de referência é obrigatório"),
  city: z.string().min(1, "Cidade é obrigatório"),
  state: z
    .string()
    .min(2, "Selecione o estado")
    .refine((value) => value !== "", { message: "Selecione o estado" })
})

const cadastroDeClienteValidacao = z.object({
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

  identidade_imagem: z
    .instanceof(File)
    .or(z.null())
    .optional()
    .refine(
      (file) => !file || ["image/jpeg", "image/png"].includes(file.type), 
      { message: 'Arquivo deve ser uma imagem PNG ou JPEG' }
    ),

  address: addressSchema,

  phone_fixo: z
    .string()
    .optional(),

  rg: z
    .string()
    .optional(),

  sexo: z.string().optional(),

  estado_civil: z.string().optional(),

  data_nascimento: z
    .instanceof(Date)
    .refine((val) => !isNaN(val.getTime()), { message: 'Data inválida' }),

  telemedicinaChecked: z.boolean().optional().default(false),

  plano_funeral: z
    .string()
    .min(1, { message: "Selecione um plano funeral válido" }),

    vencimento_boletos: z
    .string()
    .refine((value) => ["1", "3", "5", "10", "15", "20", "25", "28"]
    .includes(value), {
      message: "Selecione um dia válido para o vencimento dos boletos",
    }),

  data_vencimento: z
    .instanceof(Date)
    .refine((val) => !isNaN(val.getTime()), { message: 'Data inválida' })
    .refine((data) => data > new Date(), {
      message: "A data de vencimento deve ser uma data futura",
    }),

  adesao: z.enum(["sim", "nao"], 
    { message: "É necessário escolher uma opção de adesão" }),
  
  data_pagamento_adesao: z
    .instanceof(Date)
    .nullable()
    .optional(),

  comprovante_pagamento_adesao: z
    .instanceof(File)
    .nullable()
    .optional(),
})
.superRefine((data, ctx) => {
  if (data.adesao === "sim") {
    if (!data.data_pagamento_adesao) {
      ctx.addIssue({
        path: ["data_pagamento_adesao"],
        code: z.ZodIssueCode.custom,
        message: "Data de pagamento da adesão é obrigatória quando adesão é 'sim'",
      });
    }

    if (!data.comprovante_pagamento_adesao) {
      ctx.addIssue({
        path: ["comprovante_pagamento_adesao"],
        code: z.ZodIssueCode.custom,
        message: "Comprovante de pagamento da adesão é obrigatório quando adesão é 'sim'",
      });
    }
  }
})

type FormDataSchema = z.infer<typeof cadastroDeClienteValidacao>
export { cadastroDeClienteValidacao, addressSchema, type FormDataSchema }
