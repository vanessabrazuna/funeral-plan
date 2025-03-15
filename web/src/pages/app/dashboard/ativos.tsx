import { ShieldCheck } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
// import { obterAtivos } from '@/api/obter-ativos'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MetricasSkeleton } from './metricas-skeleton'

export function Ativos() {
  // const { data: ativos, isFetching: isLoading } = useQuery({
  //   queryKey: ['metricas', 'ativos'],
  //   queryFn: obterAtivos,
  // })

  const { data: ativos, isFetching: isLoading } = useQuery({
    queryKey: ['metricas', 'ativos'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return {
        totalAtivos: 3538,
        ativosTitulares: 2164,
        ativosDependentes: 1374,
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
        <ShieldCheck className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {isLoading ? (
          <>
            <MetricasSkeleton />
          </>
        ) : (
          ativos && (
            <>
              <div className='flex items-center gap-3'>
                <span className="text-2xl md:text-xl lg:text-2xl font-bold tracking-tight text-yellow-500 dark:text-yellow-400">
                  {ativos.totalAtivos.toLocaleString('pt-BR')}
                </span>
                <span className="text-sm md:text-xs lg:text-sm text-muted-foreground">
                  Ativos
                </span>
              </div>
  
              <div className='text-sm md:text-xs lg:text-sm text-muted-foreground'>
                {`${ativos.ativosTitulares.toString().length >= 4 ? 'Tit' : 'Titulares:'} 
                  ${ativos.ativosTitulares.toLocaleString('pt-BR')}
                    +
                  ${ativos.ativosDependentes.toString().length >= 4 ? 'Dep' :'Dependentes:'} 
                  ${ativos.ativosDependentes.toLocaleString('pt-BR')}
                `}
              </div>
            </>
          )
        )}
      </CardContent>
    </Card>
  )
}