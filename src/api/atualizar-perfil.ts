import { api } from "@/lib/axios"

interface AtualizarPerfilBody {
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

export async function atualizarPerfil({ 
  name,
  cpf_cnpj,
  email,
  data_nascimento,
  phone,
  cep,
  address: {
    street_address,
    number_address,
    district,
  },
}:AtualizarPerfilBody) {
  await api.put('/meu-perfil', {
    name,
    cpf_cnpj,
    email,
    data_nascimento: data_nascimento.toLocaleDateString(),
    phone,
    cep,
    address: {
      street_address,
      number_address,
      district,
    },
  })
}