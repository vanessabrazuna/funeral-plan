import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"

import { cadastroValidacao } from "@/utils/cadastro-validacao"
import { useMutation } from "@tanstack/react-query"
import { cadastro } from "@/api/cadastro"

// import InputMask from "react-input-mask"

type CadastroData = z.infer<typeof cadastroValidacao>

export function Cadastro() {
  const navigate = useNavigate()

  const { 
    register, 
    handleSubmit, 
    formState: { isSubmitting } 
  } = useForm<CadastroData>()

  const { mutateAsync: cadastroConsultor } = useMutation({
    mutationFn: cadastro,
  })

  async function lidarComFormularioDeCadastro(data: CadastroData) {
    try {
      await cadastroConsultor({
        name: data.name,
        cpf_cnpj: data.cpf_cnpj,
        email: data.email,
        birthdate: data.birthdate,
        phone: data.phone,
        cep: data.cep,
        address: data.address,
        password: data.password,
      })

      toast.success('Cadastro efetuado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/login?email=${data.email}`),
        },
      })
    } catch {
      toast.error('Falha ao efetuar o cadastro. Tente novamente.')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="link" asChild className="absolute right-8 top-8">
            <Link to="/login">
              Fazer login
            </Link>
          </Button>

        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Crie sua conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um consultor e comece suas vendas!
            </p>
          </div>

          <form onSubmit={handleSubmit(lidarComFormularioDeCadastro)} className="space-y-4">
          <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input 
                id="name" 
                type="text"
                className="ring-1 ring-violet-400 dark:ring-0"  
                {...register('name')} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cpf_cnpj">Seu cpf/cnpj</Label>
              <Input 
                id="cpf_cnpj" 
                type="text"
                className="ring-1 ring-violet-400 dark:ring-0"  
                {...register('cpf_cnpj')} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input 
                id="email" 
                type="email"
                className="ring-1 ring-violet-400 dark:ring-0"  
                {...register('email')} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthdate">Sua data de aniversário</Label>
              <Input 
                id="birthdate" 
                type="date"
                className="ring-1 ring-violet-400 dark:ring-0"  
                {...register('birthdate')} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input 
                id="phone" 
                type="tel"
                className="ring-1 ring-violet-400 dark:ring-0"  
                {...register('phone')} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cep">Seu cep</Label>
              <Input 
                id="cep" 
                type="text"
                className="ring-1 ring-violet-400 dark:ring-0"  
                {...register('cep')} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Seu endereço</Label>
              <Input 
                id="address" 
                type="text"
                className="ring-1 ring-violet-400 dark:ring-0"  
                {...register('address')} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Sua senha</Label>
              <Input 
                id="password" 
                type="password"
                className="ring-1 ring-violet-400 dark:ring-0"  
                {...register('password')} 
              />
            </div>

            <Button
              disabled={isSubmitting}
              className="w-full"
              type="submit"
              >
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a href="#" className="underline underline-offset-4">
                termos de serviços
              </a>{' '}
              e{' '}
              <a href="#" className="underline underline-offset-4">
                políticas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}