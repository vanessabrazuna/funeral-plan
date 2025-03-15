import { api } from "@/lib/axios"
export interface ObterAtivosResposta {
  totalAtivos: number
  ativosTitulares: number
  ativosDependentes: number
}

export async function obterAtivos() {
  const response = await api.get<ObterAtivosResposta>('/ativos')
  return response.data
}