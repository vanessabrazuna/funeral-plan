import { Helmet } from "react-helmet-async"
import { TabelaPlano } from "@/pages/app/tabela-de-preco/tabela-plano"
import { TabelaObservacoes } from "./tabela-observacoes"

export function TabelaDePreco() {
  return (
    <>
      <Helmet title="Tabela de Preço" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Tabela de Preços</h1>
      </div>
      <div className="space-y-2.5">
        <TabelaPlano />
        <TabelaObservacoes />
      </div>
    </>
  )
}
