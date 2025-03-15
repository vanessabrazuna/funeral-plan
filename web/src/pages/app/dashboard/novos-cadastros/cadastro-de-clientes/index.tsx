import { Helmet } from "react-helmet-async"
import ImageStg from "@/assets/images/stg.png"
import { FormularioCadastroCliente } from "@/pages/app/dashboard/novos-cadastros/cadastro-de-clientes/formulario-cadastro-cliente"
import { useQuery } from '@tanstack/react-query'
// import { obterPerfil } from "@/api/obter-perfil"

export function CadastroDeClientes() {
  // const { data: profile } = useQuery({
  //   queryKey: ['profile'],
  //   queryFn: obterPerfil,
  //   staleTime: Infinity,
  // })

  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return {
        name: "John Doe",
      }
    },
    staleTime: Infinity,
  })

  return (
    <>
      <Helmet title="Cadastro de clientes" />
      <div className="max-w-[1216px] mx-auto p-6 flex flex-col gap-5">
        <header className="flex items-center gap-2 py-2">
          <img 
            src={ImageStg}
            alt="Logo Santa Casa da Glória"
          />
          <span className='font-semibold tracking-tight w-auto'>
            Santa Casa da Glória - Assistência Funeral
          </span>
        </header>

        <main className='ring-1 ring-violet-200 dark:ring-violet-500 rounded-lg p-8 space-y-6'>
          <div className="flex flex-col gap-2 text-start">
            <h1 className="text-2xl font-semibold tracking-tight">Plano funeral</h1>
            <p className="text-sm text-muted-foreground">Consultor: {profile?.name}</p>

            <FormularioCadastroCliente />
          </div>
        </main>
      </div>
    </>   
  )
}
