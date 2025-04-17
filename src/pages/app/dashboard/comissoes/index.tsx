import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowBigLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { VerComissoes } from '@/pages/app/dashboard/comissoes/ver-comissoes'

export function Comissoes() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-xl font-medium">
            Receba suas comissões
          </CardTitle>
          <CardDescription>
            A Santa Casa da Glória comissiona seus vendedores pela plataforma Asaas. Para saber mais sobre o Asaas{' '}
            <Link 
              to="https://asaas.com/" 
              target='_blank' 
              className='underline underline-offset-4 flex items-center'
            >
              Clique aqui
              <ArrowBigLeft />
            </Link>{' '}
            Sua conta Asaas da Santa Casa da Glória:
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <VerComissoes />
      </CardContent>
    </Card>
  )
}