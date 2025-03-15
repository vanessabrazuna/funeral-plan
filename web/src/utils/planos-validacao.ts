import { z } from "zod"

export const moedaParaFloat = (valor: string): number => {
  const valorLimpo = valor.replace(/[^\d,]/g, "").replace(",", ".")
  return parseFloat(valorLimpo)
}

export const planosValidacao = z.object({
  nome_do_plano: z.string().min(1, "Nome do plano é obrigatório."),

  valor_da_adesao: z
    .string()
    .min(1, "Valor da adesão é obrigatório.")
    .refine((val) => /^R\$ \d{1,3}(\.\d{3})*,\d{2}$/.test(val), {
      message: "Valor da adesão deve estar no formato 'R$ 0,00'.",
    })
    .transform((val) => moedaParaFloat(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Valor da adesão deve ser maior que zero.",
    }),

  descricao_do_plano: z.string().min(3, "Descrição é obrigatória."),

  comercializavel: z.boolean().default(false),

  tipo_plano: z.enum(["individual", "familiar", "cremacao"], {
    required_error: "Tipo do plano é obrigatório.",
  }),
})

export type planosValidacao = z.infer<typeof planosValidacao>
