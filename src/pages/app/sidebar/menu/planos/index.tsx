import { Pencil, Plus } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { useQuery } from "@tanstack/react-query"

import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { EditarPlano } from "./editar-plano"
import { AdicionarPlano } from "./adicionar-plano"
import { PlanosSkeleton } from "./planos-skeleton"
import { obterPlanos } from "@/api/obter-planos"
import { ObterPlanosResposta } from "@/api/obter-planos"

export interface PlanosProps {
  nome_do_plano: string
  valor_da_adesao: number
  descricao_do_plano: string
  comercializavel: boolean
  tipo_plano: "individual" | "familiar" | "cremacao"
}

export function Planos() {
  const { data: planos = [], isLoading } = useQuery<ObterPlanosResposta[]>({
    queryKey: ["planos"],
    queryFn: obterPlanos,
  })

  return (
    <>
      <Helmet title="Planos" />
      <div className="flex gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Planos</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="size-auto">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar plano
            </Button>
          </DialogTrigger>
          <AdicionarPlano />
        </Dialog>
      </div>
      <div className="space-y-2.5">
        <PlanosSkeleton isLoading={isLoading} />

        {!isLoading && (
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[140px]">Plano Funeral</TableHead>
                  <TableHead className="w-[132px]">Adesão</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Comercializável</TableHead>
                  <TableHead className="w-[64px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.isArray(planos) && planos?.map((plano: PlanosProps) => (
                  <TableRow key={plano.nome_do_plano}>
                    <TableCell>{plano.nome_do_plano}</TableCell>
                    <TableCell>
                      {plano.valor_da_adesao.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </TableCell>
                    <TableCell>{plano.descricao_do_plano}</TableCell>
                    <TableCell>{plano.comercializavel ? "Sim" : "Não"}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" title="Editar plano">
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Editar plano</span>
                          </Button>
                        </DialogTrigger>
                        <EditarPlano />
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </>
  )
}
