import { useState } from 'react'
import { 
  Dialog, 
  DialogContent, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger, 
  DialogDescription 
} from '@/components/ui/dialog'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useQuery } from '@tanstack/react-query'
import { ComissoesSkeleton } from './comissoes-skeleton'
// import { obterComissoes } from '@/api/obter-comissoes'

export function VerComissoes() {
  const [periodo, setPeriodo] = useState<string>('')

    // const { data: comissoes,  isFetching: isLoading } = useQuery({
  //   queryKey: ['comissoes'],
  //   queryFn: obterComissoes,
  // })

  const { data: comissoes, isFetching: isLoading } = useQuery({
    queryKey: ['comissoes'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return {
        periodo_do_mes: 'OUTUBRO DE 2024',
        valor_da_adesao: 60.00,
        valor_da_recorrencias: 20.00,
        data_do_periodo: true,

      }
    },
    refetchInterval: 60000,
  })

  function lidarComMudancaDePeriodo(event: React.ChangeEvent<HTMLInputElement>) {
    setPeriodo(event.target.value)
    console.log('Período selecionado:', event.target.value)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Ver comissões
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className='space-y-4'>
          <DialogTitle>Ver comissões</DialogTitle>
          <DialogDescription>
            Aqui estão as informações sobre as comissões.
          </DialogDescription>
        </DialogHeader>
        <Table>
          {isLoading ? (
            <ComissoesSkeleton />
          ) : (
            comissoes && (
              <>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      Período de {comissoes?.periodo_do_mes}
                    </TableHead>
                  </TableRow>
                  <TableRow>
                    <TableHead>Adesões</TableHead>
                    <TableHead>Recorrências</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      {comissoes?.valor_da_adesao.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableCell>
                    <TableCell>
                      {comissoes?.valor_da_recorrencias.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </>
            )
          )}
        </Table>
        <div className="space-y-1">
          <Label htmlFor="data_do_periodo">Período</Label>
          <Input
            id="data_do_periodo"
            type="date"
            value={periodo}
            onChange={lidarComMudancaDePeriodo}
          />
        </div>
        <DialogFooter>
          <Button className='w-full'>Gerar PDF</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
