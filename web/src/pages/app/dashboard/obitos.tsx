import { Cross } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
// import { obterObitos } from '@/api/obter-obitos'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MetricasSkeleton } from './metricas-skeleton'

export function Obitos() {
  // const { data: obitos, isFetching: isLoading } = useQuery({
  //   queryKey: ['metricas', 'obitos'],
  //   queryFn: obterObitos,
  // })

  const { data: obitos, isFetching: isLoading } = useQuery({
    queryKey: ['metricas', 'obitos'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return {
        totalObitos: 193,
        obitosTitulares: 166,
        obitosDependentes: 27,
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
        <Cross className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {isLoading ? (
          <MetricasSkeleton />
        ) : (
          obitos && (
            <>
              <div className='flex items-center gap-3'>
                <span className="text-2xl md:text-xl lg:text-2xl font-bold tracking-tight">
                  {obitos.totalObitos.toLocaleString('pt-BR')}
                </span>
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground">
                  Óbitos
                </span>
              </div>
          
              <div className='text-sm md:text-xs lg:text-sm text-muted-foreground'>
                {`${obitos.obitosTitulares.toString().length >= 4 ? 'Tit' : 'Titulares:'} 
                  ${obitos.obitosTitulares.toLocaleString('pt-BR')}
                    +
                  ${obitos.obitosDependentes.toString().length >= 4 ? 'Dep' :'Dependentes:'} 
                  ${obitos.obitosDependentes.toLocaleString('pt-BR')}
                `}
              </div>
            </>
          )
        )}
      </CardContent>
    </Card>
  )
}