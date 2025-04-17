import { api } from '@/lib/axios'

export interface CadastroBody {
  name: string
  cpf_cnpj: string
  email: string
  birthdate: Date
  phone: string
  cep: string
  address: {
    streetAddress: string
    numberAddress: string
    district: string
  }
  password: string
}

export async function cadastro({ 
  name,
  cpf_cnpj,
  email,
  birthdate,
  phone,
  cep,
  address: {
    streetAddress,
    district,
  },
  password,
}: CadastroBody) {
  await api.post('/cadastro', { 
    name,
    cpf_cnpj,
    email,
    birthdate,
    phone,
    cep,
    address: {
      streetAddress,
      district,
    },
    password,
  })
}