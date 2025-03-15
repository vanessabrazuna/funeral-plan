import { IdCard } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
// import { obterTitulares } from '@/api/obter-titulares'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MetricasSkeleton } from './metricas-skeleton'

export function Titulares() {
  // const { data: titulares,  isFetching: isLoading } = useQuery({
  //   queryKey: ['metricas', 'titulares'],
  //   queryFn: obterTitulares,
  // })

  const { data: titulares, isFetching: isLoading } = useQuery({
    queryKey: ['metricas', 'titulares'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return {
        titularesEmDia: 1765,
        titularesInadimplentes: 398,
      }
    },
    refetchInterval: 60000,
  })

  return (
    <Card className='h-36'>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">
          Titulares
        </CardTitle>
        <IdCard className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {isLoading ? (
          <MetricasSkeleton />
        ) : (
          titulares && (
            <>
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-xl lg:text-2xl font-bold tracking-tight text-emerald-500 dark:text-emerald-400">
                  {titulares.titularesEmDia.toLocaleString('pt-BR')}
                </span>
                <span 
                  className="text-sm md:text-xs lg:text-sm text-muted-foreground">
                    Em dia e ativos
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-xl lg:text-2xl font-bold tracking-tight text-rose-500 dark:text-rose-400">
                  {titulares.titularesInadimplentes.toLocaleString('pt-BR')}
                </span>
                <span 
                  className="text-sm md:text-xs text-muted-foreground">
                    Inadimplentes e ativos
                </span>
              </div>
            </>
          )
        )}
      </CardContent>
    </Card>
  )
}