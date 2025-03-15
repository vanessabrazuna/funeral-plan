import InputMask from "react-input-mask"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  DialogContent, DialogFooter, DialogHeader, DialogTitle 
} from "@/components/ui/dialog"

import { planosValidacao } from '@/utils/planos-validacao'
import { editarPlano } from "@/api/editar-plano"
import { ObterPlanosResposta, obterPlanos } from "@/api/obter-planos"

export function EditarPlano() {
  const queryClient = useQueryClient()

  const { data: planos = [] } = useQuery<ObterPlanosResposta[]>({
    queryKey: ["planos"],
    queryFn: obterPlanos,
    initialData: [],
  })

  const tipoPlanoValido = (valor: string): "individual" | "familiar" | "cremacao" => {
    return ["individual", "familiar", "cremacao"].includes(valor) ? valor as "individual" | "familiar" | "cremacao" : "individual"
  }

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<planosValidacao>({
    resolver: zodResolver(planosValidacao),
    values: {
      nome_do_plano: planos[0]?.nome_do_plano?? '',
      valor_da_adesao: planos[0]?.valor_da_adesao ?? '',
      descricao_do_plano: planos[0]?.descricao_do_plano?? '',
      comercializavel: Boolean(planos[0]?.comercializavel),
      tipo_plano: tipoPlanoValido(planos[0]?.tipo_plano ?? 'individual'),
    },
  })

  const { mutateAsync: editarPlanoFn } = useMutation({
    mutationFn: editarPlano,
    onSuccess(_, { 
      nome_do_plano, 
      valor_da_adesao, 
      descricao_do_plano, 
      comercializavel, 
      tipo_plano 
    }) {
      const cached = queryClient.getQueryData<ObterPlanosResposta[]>(['planos'])
      
      if (cached) {
        // Atualizar o plano específico na lista de planos cacheada
        const planosAtualizados = cached.map((plano) => {
          if (plano.nome_do_plano === nome_do_plano) {
            return {
              ...plano,
              valor_da_adesao,
              descricao_do_plano,
              comercializavel,
              tipo_plano
            };
          }
          return plano
        })
  
        queryClient.setQueryData(['planos'], planosAtualizados)
        toast.success('Plano atualizado com sucesso!')
      }
    },
  })

  async function lidarComAtualizacaoDoPlano(data: planosValidacao) {
    console.log("Dados do formulário editados e enviados:", data)

    try {
      await editarPlanoFn({
        nome_do_plano: data.nome_do_plano,
        valor_da_adesao: data.valor_da_adesao,
        descricao_do_plano: data.descricao_do_plano,
        comercializavel: data.comercializavel,
        tipo_plano: data.tipo_plano as "individual" | "familiar" | "cremacao"
      })

      toast.success('Plano atualizado com sucesso!')
    } catch {
      toast.error('Falha ao atualizar o plano. Tente novamente.')
    }
  }

  return (
    <DialogContent className="max-w-5xl h-full md:h-96 overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Editar plano</DialogTitle>
      </DialogHeader>

      <form
        onSubmit={handleSubmit(lidarComAtualizacaoDoPlano)}  
        className="space-y-6 md:space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="nome_do_plano">
              Nome do plano <span className="text-red-500">*</span>
            </Label>
            <Input 
              id="nome_do_plano" 
              type="text" placeholder="Digite o nome do plano"
              {...register('nome_do_plano')} 
            />
            {errors.nome_do_plano && 
              <span className="text-red-500">
                {errors.nome_do_plano.message}
              </span>
            }
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="valor_da_adesao">
              Valor da adesão <span className="text-red-500">*</span>
            </Label>
            <InputMask 
              id="valor_da_adesao"
              type="text"
              mask="R$ 99,99"
              placeholder="R$ 00,00"
               className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ring-1 ring-violet-400 dark:ring-0 dark:focus:ring"
              {...register('valor_da_adesao')}
            />
            {errors.valor_da_adesao && 
              <span className="text-red-500">
                {errors.valor_da_adesao.message}
              </span>
            }
          </div>

          <div className="flex items-center space-x-2.5">
            <Input
              id="comercializavel"
              type="checkbox"
              className="peer h-4 w-4 shrink-0 rounded-sm border border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              {...register('comercializavel')}
            />
            <Label htmlFor="comercializavel">
              Comercializável
            </Label>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="descricao_do_plano">
            Descrição <span className="text-red-500">*</span>
          </Label>
          <Textarea 
            id="descricao_do_plano" 
            placeholder="Descrição do plano"
            aria-describedby="descricao dp plano"
            {...register('descricao_do_plano')}
          />
          {errors.descricao_do_plano && 
            <span className="text-red-500">
              {errors.descricao_do_plano.message}
            </span>
          }
        </div>

        <div className="flex items-center space-x-6">
          <Label htmlFor="tipo_plano" className="flex items-center space-x-2">
            <input
              id="tipo_plano"
              type="radio" 
              value="individual" 
              {...register('tipo_plano')} 
              className="h-4 w-4 border" 
            />
            <span>Plano Individual</span>
            {errors.tipo_plano && 
              <span className="text-red-500">
                {errors.tipo_plano.message}
              </span>
            }
          </Label>
          <Label htmlFor="tipo_plano" className="flex items-center space-x-2">
            <input
              id="tipo_plano"
              type="radio" 
              value="familiar" 
              {...register('tipo_plano')} 
              className="h-4 w-4 border" 
            />
            <span>Plano Familiar</span>
            {errors.tipo_plano && 
              <span className="text-red-500">
                {errors.tipo_plano.message}
              </span>
            }
          </Label>
          <Label htmlFor="tipo_plano" className="flex items-center space-x-2">
            <input
              id="tipo_plano" 
              type="radio" 
              value="cremacao" 
              {...register('tipo_plano')} 
              className="h-4 w-4 border" 
            />
            <span>Plano Cremação</span>
            {errors.tipo_plano && 
              <span className="text-red-500">
                {errors.tipo_plano.message}
              </span>
            }
          </Label>
        </div>

        <DialogFooter>
          <Button 
            type="submit" 
            className="mx-auto w-full md:w-80" 
            disabled={isSubmitting}
          >
            Editar plano
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}