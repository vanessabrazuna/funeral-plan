import { api } from '@/lib/axios'

export interface CadastroDeClienteBody {
  name: string
  cpf_cnpj: string
  rg?: string
  identidade_imagem?: File | null
  email: string
  phone_fixo?: string
  phone: string
  cep: string
  address: {
    street_address: string
    number_address?: string
    complement?: string
    reference_point: string
    district: string
    city: string
    state: string
  }
  sexo?: string
  estado_civil?: string
  data_nascimento: Date
  telemedicinaChecked: boolean
  plano_funeral: string
  vencimento_boletos: string
  data_vencimento: Date
  adesao: string
  data_pagamento_adesao: Date | null
  comprovante_pagamento_adesao: File | null | undefined
}

export async function cadastroDeCliente({
  name,
  cpf_cnpj,
  rg,
  identidade_imagem,
  email,
  phone_fixo,
  phone,
  cep,
  address: {
    street_address,
    number_address,
    complement,
    reference_point,
    district,
    city,
    state,
  },
  sexo,
  estado_civil,
  data_nascimento,
  telemedicinaChecked,
  plano_funeral,
  vencimento_boletos,
  data_vencimento,
  adesao,
  data_pagamento_adesao,
  comprovante_pagamento_adesao,
}: CadastroDeClienteBody) {
  const formData = new FormData()

  formData.append('name', name)
  formData.append('cpf_cnpj', cpf_cnpj)
  if (rg) formData.append('rg', rg)
  if (identidade_imagem) formData.append('image', identidade_imagem)
  formData.append('email', email)
  if (phone_fixo) formData.append('phone_fixo', phone_fixo)
  formData.append('phone', phone)
  formData.append('cep', cep)
  formData.append('address[street_address]', street_address)
  if (number_address) formData.append('address[number_address]', number_address)
  if (complement) formData.append('address[complement]', complement)
  formData.append('address[reference_point]', reference_point)
  formData.append('address[district]', district)
  formData.append('address[city]', city)
  formData.append('address[state]', state)
  if (sexo) formData.append('sexo', sexo)
  if (estado_civil) formData.append('estado_civil', estado_civil)
  if (data_nascimento) formData.append('data_nascimento', data_nascimento.toLocaleDateString())
  if (data_vencimento) formData.append('data_vencimento', data_vencimento.toLocaleDateString())
  formData.append('telemedicinaChecked', telemedicinaChecked ? 'true' : 'false')
  formData.append('plano_funeral', plano_funeral)
  formData.append('vencimento_boletos', vencimento_boletos)
  formData.append('adesao', adesao)
  
  if (adesao === "sim") {
    if (data_pagamento_adesao) {
      formData.append('data_pagamento_adesao', data_pagamento_adesao.toLocaleDateString())
    }

    if (comprovante_pagamento_adesao && comprovante_pagamento_adesao instanceof File) {
      formData.append('comprovante_pagamento_adesao', comprovante_pagamento_adesao)
    }
  }
  
  await api.post('/cadastro-de-clientes', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
