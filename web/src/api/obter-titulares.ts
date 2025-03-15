import { api } from "@/lib/axios"
export interface ObterTitularesResposta {
  titularesEmDia: number
  titularesInadimplentes: number
}

export async function obterTitulares() {
  const response = await api.get<ObterTitularesResposta>('/titulares')
  return response.data
}