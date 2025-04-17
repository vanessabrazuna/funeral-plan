import { api } from "@/lib/axios"

export interface ObterPlanosResposta {
  nome_do_plano: string
  valor_da_adesao: number
  descricao_do_plano: string
  comercializavel: boolean
  tipo_plano: "individual" | "familiar" | "cremacao"
}

export async function obterPlanos(): Promise<ObterPlanosResposta[]> {
  const response = await api.get<ObterPlanosResposta[]>("/planos")
  return response.data
}
