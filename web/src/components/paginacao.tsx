import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { Button } from './ui/button'
import { useSearchParams } from 'react-router-dom'

export interface PaginacaoProps {
  paginaAtual: number
  totalDeItens: number
  itensPorPagina: number
}

export function Paginacao({ paginaAtual, totalDeItens, itensPorPagina }: PaginacaoProps) {
  const paginas = Math.ceil(totalDeItens / itensPorPagina) || 1
  const [_, setSearchParams] = useSearchParams()

  function firstPage() {
    setSearchParams((params) => {
      params.set('page', '1')
      return params
    })
  }

  function previousPage() {
    if (paginaAtual > 1) {
      setSearchParams((params) => {
        params.set('page', String(paginaAtual - 1))
        return params
      })
    }
  }

  function nextPage() {
    if (paginaAtual < paginas) {
      setSearchParams((params) => {
        params.set('page', String(paginaAtual + 1))
        return params
      })
    }
  }

  function lastPage() {
    setSearchParams((params) => {
      params.set('page', String(paginas))
      return params
    })
  }

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalDeItens} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {paginaAtual} de {paginas}
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={firstPage} variant="outline" className="h-8 w-8 p-0" disabled={paginaAtual === 1}>
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button onClick={previousPage} variant="outline" className="h-8 w-8 p-0" disabled={paginaAtual === 1}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button onClick={nextPage} variant="outline" className="h-8 w-8 p-0" disabled={paginaAtual === paginas}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button onClick={lastPage} variant="outline" className="h-8 w-8 p-0" disabled={paginaAtual === paginas}>
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
