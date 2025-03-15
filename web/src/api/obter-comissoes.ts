import { api } from "@/lib/axios"
export interface ObterComissoesResposta {
  periodo_do_mes: string
  valor_da_adesao: number
  valor_da_recorrencias: number
  data_do_periodo: Date
}

export async function obterComissoes() {
  const response = await api.get<ObterComissoesResposta>('/comissoes')
  return response.data
}