import { api } from '@/lib/axios'
import { AxiosError } from 'axios'

export interface LoginBody {
  email: string
  senha: string
}

async function getCSRFToken() {
  await api.get('/sanctum/csrf-cookie')
}

export async function login({ email, senha }: LoginBody) {
  await getCSRFToken()

  try {
    const response = await api.post('/login', { email, senha })
    return response.data
  } catch (error) {
    const err = error as AxiosError
    const errorMessage = err.response?.data && typeof err.response.data === 'object' && 'message' in err.response.data
      ? (err.response.data as { message: string }).message
      : 'Erro desconhecido ao tentar login'
    
    console.error("Erro de login:", errorMessage)
    throw new Error(errorMessage)
  }
}
