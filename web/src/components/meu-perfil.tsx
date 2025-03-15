import { Building, ChevronDown, LogOut, UserCog } from "lucide-react"

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Dialog, DialogTrigger } from "./ui/dialog"
import { useMutation, useQuery } from "@tanstack/react-query"
import { Skeleton } from "./ui/skeleton"
import { EditarMeuPerfil } from "./editar-meu-perfil"
import { logout } from "@/api/logout"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
// import { obterPerfil } from "@/api/obter-perfil"

export function MeuPerfil() {
  const navigate = useNavigate()

  // const { data: profile, isLoading: isLoadingProfile } = useQuery({
  //   queryKey: ['profile'],
  //   queryFn: obterPerfil,
  //   staleTime: Infinity,
  // })

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return {
        name: "John Doe",
        email: "john@doe.com.br",
      }
    },
    staleTime: Infinity,
  })

  const { mutateAsync: logoutFn, isPending: isLogout } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success('Sessão expirada, faça login novamente!')
      navigate('/login', { replace: true })
    },
  })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex select-none items-center gap-2"
          >
            <UserCog />
            {isLoadingProfile ? (
              <Skeleton className="h-4 w-20 md:w-40" /> 
            ) : (
              profile?.name
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            {isLoadingProfile ? (
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            ) : (
              <>
                <span>
                  {profile?.name}
                </span>
                <span className="text-xs font-normal text-muted-foreground">
                  {profile?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="mr-2 h-4 w-4" />
              <span>Meu perfil</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem 
            asChild 
            className="text-rose-500 dark:text-rose-400"
            disabled={isLogout}
          >
            <button className="w-full" onClick={() => logoutFn()}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditarMeuPerfil />
    </Dialog>
  )
}