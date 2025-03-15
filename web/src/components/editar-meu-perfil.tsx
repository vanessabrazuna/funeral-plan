import { z } from "zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

import { editarMeuPerfilValidacao } from '@/utils/editar-meu-perfil-validacao'
import { atualizarPerfil } from "@/api/atualizar-perfil"
// import { obterPerfil } from "@/api/obter-perfil"
import { ObterPerfilResposta } from "@/api/obter-perfil"

import { 
  DialogContent, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "./ui/dialog"

type EditarMeuperfilData = z.infer<typeof editarMeuPerfilValidacao>

export function EditarMeuPerfil() {
  const queryClient = useQueryClient()

  // const { data: profile } = useQuery({
  //   queryKey: ['profile'],
  //   queryFn: obterPerfil,
  // })

  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return {
        name: "John Doe",
        cpf_cnpj: "999.999.999-99",
        email: "john@doe.com.br",
        phone: "(11) 99999-9999",
        cep: "99999-999",
        address: {
          street_address: 'Rua dos Bobos',
          number_address: "123",
          district: "Bairro",
        },
        data_nascimento: new Date(),
      }
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditarMeuperfilData>({
    resolver: zodResolver(editarMeuPerfilValidacao),
    values: {
      name: profile?.name ?? '',
      cpf_cnpj: profile?.cpf_cnpj ?? '',
      email: profile?.email ?? '',
      phone: profile?.phone ?? '',
      cep: profile?.cep ?? '',
      address: {
        street_address: profile?.address?.street_address ?? '',
        number_address: profile?.address?.number_address ?? '',
        district: profile?.address?.district ?? '',
      },
      data_nascimento: profile?.data_nascimento ?? new Date(),
    },
  })

  const { mutateAsync: atualizarPerfilFn } = useMutation({
    mutationFn: atualizarPerfil,
    onSuccess(_,{ name, email }) {
      const cached = queryClient.getQueryData<ObterPerfilResposta>(['profile'])

    if (cached) {
      queryClient.setQueryData<ObterPerfilResposta>(['profile'], {
        ...cached,
        name,
        email,
      })
      toast.success('Perfil atualizado com sucesso!')
    }
    },
  })

  async function lidarComAtualizacaoDoPerfil(data: EditarMeuperfilData) {
    console.log("Dados do formulário enviados:", data)

    try {
      await atualizarPerfilFn({
        name: data.name,
        cpf_cnpj: data.cpf_cnpj,
        email: data.email,
        phone: data.phone,
        cep: data.cep,
        address: {
          street_address: data.address.street_address,
          number_address: data.address.number_address,
          district: data.address.district,
        },
        data_nascimento: data.data_nascimento,
      })

      toast.success('Perfil atualizado com sucesso!')
    } catch {
      toast.error('Falha ao atualizar o perfil. Tente novamente.')
    }
  }

  return (
    <DialogContent className="max-w-5xl h-full md:h-96 overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Editar perfil</DialogTitle>
      </DialogHeader>

      <form 
        onSubmit={handleSubmit(lidarComAtualizacaoDoPerfil)} 
        className="space-y-6 md:space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
          <div className="space-y-1">
            <Label htmlFor="name">
              Nome <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              className="ring-1 ring-violet-400 dark:ring-0 dark:focus:ring"
              placeholder="Digite seu nome"
              {...register('name')}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="cpf_cnpj">
              CPF/CNPJ <span className="text-red-500">*</span>
            </Label>
            <Input
              id="cpf_cnpj"
              type="text"
              className="ring-1 ring-violet-400 dark:ring-0 dark:focus:ring"
              placeholder="Digite seu CPF ou CNPJ"
              {...register('cpf_cnpj')}
            />
            {errors.cpf_cnpj && <span className="text-red-500">{errors.cpf_cnpj.message}</span>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              className="ring-1 ring-violet-400 dark:ring-0 dark:focus:ring"
              placeholder="Digite seu email..."
              {...register('email')}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="data_nascimento">
              Data de nascimento <span className="text-red-500">*</span>
            </Label>
            <Input
              id="data_nascimento"
              type="date"
              {...register("data_nascimento", { valueAsDate: true })}
            />
            {errors.data_nascimento?.message && (
              <span className="text-red-500 text-sm">{errors.data_nascimento.message}</span>
            )}
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone">
              Celular <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              className="ring-1 ring-violet-400 dark:ring-0 dark:focus:ring"
              placeholder="Digite seu celular..."
              {...register('phone')}
            />
            {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="cep">
              CEP <span className="text-red-500">*</span>
            </Label>
            <Input
              id="cep"
              type="text"
              className="ring-1 ring-violet-400 dark:ring-0 dark:focus:ring"
              placeholder="Digite seu CEP..."
              {...register('cep')}
            />
            {errors.cep && <span className="text-red-500">{errors.cep.message}</span>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="street_address">
              Endereço <span className="text-red-500">*</span>
            </Label>
            <Input
              id="street_address"
              type="text"
              className="ring-1 ring-violet-400 dark:ring-0 dark:focus:ring"
              placeholder="Digite seu endereço..."
              {...register('address.street_address')}
            />
            {errors.address?.street_address && <span className="text-red-500">{errors.address.street_address.message}</span>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="number_address">
              Número da rua <span className="text-red-500">*</span>
            </Label>
            <Input
              id="number_address"
              type="text"
              className="ring-1 ring-violet-400 dark:ring-0 dark:focus:ring"
              placeholder="Digite seu número da rua..."
              {...register('address.number_address')}
            />
            { errors.address?.number_address && <span className="text-red-500">
              {errors.address.number_address.message}</span>
            }
          </div>

          <div className="space-y-1">
            <Label htmlFor="district">
              Bairro <span className="text-red-500">*</span>
            </Label>
            <Input
              id="district"
              type="text"
              className="ring-1 ring-violet-400 dark:ring-0 dark:focus:ring"
              placeholder="Digite seu bairro..."
              {...register('address.district')}
            />
            {
              errors.address?.district && <span className="text-red-500">
              {errors.address.district.message}</span>
            }
          </div>
        </div>

        <DialogFooter>
            <Button type="submit" className="mx-auto w-full md:w-80" disabled={isSubmitting}>
              Editar perfil
            </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}