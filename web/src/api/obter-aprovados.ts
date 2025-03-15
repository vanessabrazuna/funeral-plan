import { api } from "@/lib/axios"
export interface ObterAprovadosResposta {
  totalAprovados: number
  aprovadosTitulares: number
  aprovadosDependentes: number
}

export async function obterAprovados() {
  const response = await api.get<ObterAprovadosResposta>('/aprovados')
  return response.data
}