import { api } from '@/lib/axios'

export interface redefinirSenhaResposta {
  email: string
  token: string
  senha: string
  confirmarSenha: string
}

export async function redefinirSenha({
  email,
  token,
  senha,
  confirmarSenha,
}: redefinirSenhaResposta) {
  await api.put('/resetar-senha', {
    email,
    token,
    password: senha,
    password_confirmation: confirmarSenha,
  })
}
