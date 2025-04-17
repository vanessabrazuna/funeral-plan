import { api } from "@/lib/axios"
export interface ObterObitosResposta {
  totalObitos: number
  obitosTitulares: number
  obitosDependentes: number
}

export async function obterObitos() {
  const response = await api.get<ObterObitosResposta>('/obitos')
  return response.data
}