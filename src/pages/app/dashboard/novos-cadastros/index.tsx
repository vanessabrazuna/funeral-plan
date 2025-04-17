import { Link } from 'react-router-dom'
import { ClipboardCheck, Copy, QrCode } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export function NovosCadastros() {
  return (
    <Card className='md:h-full lg:h-[13.5rem] col-span-6 md:col-span-3'>
      <CardHeader className="pb-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">Novos cadastros</CardTitle>
          <ClipboardCheck className="h-6 w-6 text-muted-foreground" />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Button className="flex items-center gap-2 w-full justify-center text-sm md:text-xs lg:text-sm text-pretty">
            Novos cadastrados
          </Button>

          <Link to="/cadastro-de-clientes" target='_blank'>
            <Button className="flex items-center gap-2 w-full justify-center text-sm md:text-xs lg:text-sm text-balance">
              Cadastro de clientes
            </Button>
          </Link>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Button
            variant="secondary"
            className="flex items-center gap-2 w-full justify-center text-sm md:text-xs lg:text-sm"
          >
            <Copy className="h-4 w-4 block md:hidden lg:block" />
            Link de venda
          </Button>

          <Button
            variant="secondary"
            className="flex items-center gap-2 w-full justify-center text-sm md:text-xs lg:text-sm"
          >
            <QrCode className="h-4 w-4 block md:hidden lg:block" />
            Gerar QR Code
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}