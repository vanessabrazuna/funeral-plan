import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import InputMask from "react-input-mask"

import { esqueceuSuaSenhaValidacao } from "@/utils/esqueceu-sua-senha-validacao"
import { useMutation } from "@tanstack/react-query"
import { esqueceuSuaSenha } from "@/api/esqueceu-sua-senha"

type ModalLoginData = z.infer<typeof esqueceuSuaSenhaValidacao>

export function EsqueceuSuaSenha() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ModalLoginData>({
    resolver: zodResolver(esqueceuSuaSenhaValidacao),
  })

  const { mutateAsync: resetSenha } = useMutation({
    mutationFn: esqueceuSuaSenha,
  })

  // Função para limpar o CPF (remover pontos e traços)
  function limparCpf(cpf: string) {
    return cpf.replace(/[^0-9]/g, '')
  }

  async function lidandoComFormularioDeEnvio(data: ModalLoginData) {
    const cpfLimpo = limparCpf(data.cpf)

    try {
      await resetSenha({ cpf: cpfLimpo })

      toast.success('Email de redefinição de senha foi enviado para sua caixa de email!')
      console.log('Email enviado com sucesso!')
      reset()
    } catch {
      toast.error('Falha ao enviar o email. Tente novamente.')
      console.log('Falha ao enviar o email. Tente novamente.')
    }
  }

  function lidandoComFechamentoDoModal() {
    reset()
  }

  return (
    <Dialog onOpenChange={lidandoComFechamentoDoModal}>
      <DialogTrigger className="underline-offset-4 hover:underline">
        Esqueci minha senha
      </DialogTrigger>
      <DialogContent className="h-72">
        <DialogHeader className="space-y-3">
          <DialogTitle>Recupere sua senha</DialogTitle>
          <DialogDescription>
            Digite seu CPF. Você receberá um email de redefinição de senha, se estiver registrado com ele.
          </DialogDescription>
        </DialogHeader>
        <form 
          onSubmit={handleSubmit(lidandoComFormularioDeEnvio)} 
          className="flex flex-col justify-center items-start space-y-4">
          <Label htmlFor="cpf">CPF</Label>
          <InputMask
            id="cpf"
            mask="999.999.999-99"
            placeholder="000.000.000-00"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ring-1 ring-violet-400 dark:ring-0 dark:focus:ring"
            {...register("cpf")}
          />
          {errors.cpf && <span className="text-red-500">{errors.cpf.message}</span>}
          <Button
            type="submit" 
            className="w-full"
            disabled={isSubmitting}>
            Enviar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
