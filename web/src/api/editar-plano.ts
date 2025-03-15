import { api } from "@/lib/axios"

export interface editarPlanoBody {
  nome_do_plano: string
  valor_da_adesao: number
  descricao_do_plano: string
  comercializavel: boolean
  tipo_plano: "individual" | "familiar" | "cremacao"
}

export async function editarPlano({
  nome_do_plano,
  valor_da_adesao,
  descricao_do_plano,
  comercializavel,
  tipo_plano,
}: editarPlanoBody) {
  await api.put('/editar-plano', {
    nome_do_plano,
    valor_da_adesao,
    descricao_do_plano,
    comercializavel,
    tipo_plano,
  })
}