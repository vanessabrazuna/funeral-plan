import { api } from '@/lib/axios'

export interface esqueceuSuaSenhaResposta {
  cpf: string
}

export async function esqueceuSuaSenha({ cpf }: esqueceuSuaSenhaResposta) {
  await api.post('/esqueci-minha-senha', { cpf })
}