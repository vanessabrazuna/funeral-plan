import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react'
import { Helmet } from "react-helmet-async"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import ImageLogoStg from "@/assets/logos/stg_logo.png"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { redefinirSenhaValidacao } from "@/utils/redefinir-senha-validacao"
import { redefinirSenha } from "@/api/redefinir-senha"

type RedefinirSenhaData = z.infer<typeof redefinirSenhaValidacao>

export function RedefinirSenha() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  // Capturar email e token da URL
  const token = searchParams.get("token")
  const email = searchParams.get("email")

  if (!email || !token) {
    toast.error("Link inválido ou expirado!")
    return null
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RedefinirSenhaData>({
    resolver: zodResolver(redefinirSenhaValidacao),
  })

  const { mutateAsync: redefinirSenhaFn } = useMutation({
    mutationFn: redefinirSenha,
  })

  async function lidarComRedefinicaoSenha(data: RedefinirSenhaData) {
    try {
      await redefinirSenhaFn({
        email: email as string,
        token: token as string,
        senha: data.senha,
        confirmarSenha: data.confirmarSenha,
      });
      toast.success("Redefinição de senha feita com sucesso!")
      navigate("/login")
    } catch {
      toast.error("Falha ao redefinir a senha. Tente novamente.")
    }
  }

  function alternarVisibilidadeDaSenha() {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <>
      <Helmet title="Redefinir senha" />
      <div className="min-h-screen flex items-center justify-center flex-col px-8">
        <div>
          <img
            src={ImageLogoStg}
            className="w-44 h-auto mx-auto mb-14 invert-75 dark:invert-0"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-2 text-center w-full max-w-sm">
          <h1 className="text-2xl font-semibold tracking-tight">
            Redefinir sua senha
          </h1>
          <p className="text-sm text-muted-foreground">
            Preencha os campos abaixo
          </p>
        </div>

        <form
          onSubmit={handleSubmit(lidarComRedefinicaoSenha)}
          className="space-y-4 w-full max-w-sm mt-1"
        >
          <div className="space-y-2">
            <Label htmlFor="senha">Sua nova senha</Label>
            <div className="relative flex items-center">
              <Input
                id="senha"
                type={passwordVisible ? "text" : "password"}
                placeholder="Digite sua nova senha"
                className="w-full ring-1 ring-violet-400 dark:ring-0 dark:focus:ring"
                {...register("senha")}
              />
              <span
                onClick={alternarVisibilidadeDaSenha}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
            {errors.senha && <p className="text-red-500 text-sm">{errors.senha.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmarSenha">Confirme sua senha</Label>
            <div className="relative flex items-center">
              <Input
                id="confirmarSenha"
                type={passwordVisible ? "text" : "password"}
                placeholder="Confirme sua senha"
                className="w-full ring-1 ring-violet-400 dark:ring-0 dark:focus:ring"
                {...register("confirmarSenha")}
              />
              <span
                onClick={alternarVisibilidadeDaSenha}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
            {errors.confirmarSenha && <p className="text-red-500 text-sm">{errors.confirmarSenha.message}</p>}
          </div>

          <Button disabled={isSubmitting} className="w-full" type="submit">
            Redefinir
          </Button>
        </form>
      </div>
    </>
  )
}
