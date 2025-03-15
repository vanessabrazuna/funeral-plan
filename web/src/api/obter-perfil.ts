import { api } from "@/lib/axios"

export interface ObterPerfilResposta {
  name: string
  cpf_cnpj: string
  email: string
  data_nascimento: Date
  phone: string
  cep: string
  address: {
     street_address: string
    number_address: string
    district: string
  }
}

export async function obterPerfil() {
  const response = await api.get<ObterPerfilResposta>('/meu-perfil')
  return response.data
}