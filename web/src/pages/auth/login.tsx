import { useSearchParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EsqueceuSuaSenha } from "@/components/esqueceu-sua-senha"
import { loginValidacao } from "@/utils/login-validacao"
import { login } from "@/api/login"

type LoginData = z.infer<typeof loginValidacao>

export function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<LoginData>({
    resolver: zodResolver(loginValidacao),
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: autenticacao } = useMutation({
    mutationFn: login,
  })
  
  async function lidarComFormularioDeLogin(data: LoginData) {
    try {
      console.log(data)
      await autenticacao({ email: data.email, senha: data.password }) 
      toast.success('Login efetuado com sucesso!')
      navigate('/') 

    } catch {
      toast.error('Falha ao efetuar login. Tente novamente.')
    }
  }
  

  function alternarVisibilidadeDaSenha() {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="md:p-8">
        <div className="absolute right-5 md:right-8 top-8 text-sm text-primary">
          <EsqueceuSuaSenha />
        </div>

        <div className="w-auto md:w-[350px] flex flex-col justify-center gap-6 pt-14 md:pt-0">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
            <p className="text-sm text-muted-foreground">Acompanhe suas vendas, relatórios e muito mais!</p>
          </div>

          <form onSubmit={handleSubmit(lidarComFormularioDeLogin)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                id="email"
                type="text"
                placeholder="Digite seu email"
                className="w-full ring-1 ring-violet-400 dark:ring-0 dark:focus:ring"
                {...register('email')}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Sua senha</Label>
              <div className="relative flex items-center">
                <Input
                  id="password"
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  className="w-full ring-1 ring-violet-400 dark:ring-0 dark:focus:ring pr-10 h-10"
                  {...register('password')}
                />
                <span
                  onClick={alternarVisibilidadeDaSenha}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
