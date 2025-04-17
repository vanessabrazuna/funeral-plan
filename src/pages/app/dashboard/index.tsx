import { Helmet } from "react-helmet-async"
import { NovosCadastros } from "@/pages/app/dashboard/novos-cadastros"
import { Comissoes } from "@/pages/app/dashboard/comissoes"
import { Titulares } from "@/pages/app/dashboard/titulares"
import { Obitos } from "@/pages/app/dashboard/obitos"
import { Ativos } from "@/pages/app/dashboard/ativos"
import { Aprovados } from "@/pages/app/dashboard/aprovados"

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <Titulares />
          </div>
        
          <div>
            <Obitos />
          </div>
      
          <div>
            <Ativos />
          </div>
        
          <div>
            <Aprovados />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-9 gap-4">
          <div className="col-span-6">
            <Comissoes />
          </div>

          <div className="col-span-6 md:col-span-3">
            <NovosCadastros />
          </div>
        </div>
      </div>
    </>
  )
}
