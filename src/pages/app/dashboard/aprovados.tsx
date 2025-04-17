import { CheckCheck } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
// import { obterAprovados } from '@/api/obter-aprovados'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MetricasSkeleton } from './metricas-skeleton'

export function Aprovados() {
  //  const { data: aprovados, isFetching: isLoading } = useQuery({
  //   queryKey: ['metricas', 'aprovados'],
  //   queryFn: obterAprovados,
  // })

  const { data: aprovados, isFetching: isLoading } = useQuery({
    queryKey: ['metricas', 'aprovados'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return {
        totalAprovados: 142,
        aprovadosTitulares: 47,
        aprovadosDependentes: 95,
      }
    },
    refetchInterval: 60000,
  })

  return (
    <Card className='h-36'>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">
          Situação cadastral
        </CardTitle>
        <CheckCheck className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {isLoading ? (
          <>
            <MetricasSkeleton />
          </>
        ) : (
          aprovados && (
            <>
              <div className='flex items-center gap-3'>
                <span className="text-2xl md:text-xl lg:text-2xl font-bold tracking-tight text-emerald-500 dark:text-emerald-400">
                  {aprovados.totalAprovados.toLocaleString('pt-BR')}
                </span>
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground">
                  Aprovados
                </span>
              </div>
  
              <div className='text-sm md:text-xs lg:text-sm text-muted-foreground'>
                {`${aprovados.aprovadosTitulares.toString().length >= 4 
                  ? 'Tit' : 'Titulares:'} 
                  ${aprovados.aprovadosTitulares.toLocaleString('pt-BR')}
                    +
                  ${aprovados.aprovadosDependentes.toString().length >= 4 ? 
                    'Dep' :'Dependentes:'} 
                  ${aprovados.aprovadosDependentes.toLocaleString('pt-BR')}
                `}
              </div>
            </>
          )
        )}
      </CardContent>
    </Card>
  )
}