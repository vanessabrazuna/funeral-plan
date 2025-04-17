import { useState } from "react"
import { tabelaDePreco } from "@/data/tabela-de-preco"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TabelaFiltro } from "@/pages/app/tabela-de-preco/tabela-filtro"

export function TabelaPlano() {
  const [filter, setFilter] = useState("")

  const filteredPlanos = tabelaDePreco.planos.filter((plano) =>
    plano.tipo.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <>
      <TabelaFiltro onFilterChange={setFilter} />

      {filteredPlanos.map((plano, index) => (
        <div key={index} className="border rounded-md p-2 md:p-0">
          <h2 className="text-lg font-semibold p-2">{plano.tipo}</h2>

          {plano.tipo === "Plano Familiar" && (
            <span className="text-sm text-zinc-500 px-2">
              Máximo de 9 dependentes para titulares com CPF. Para titulares com CNPJ, não há limite.
            </span>
          )}

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]">
                  {plano.tipo === "Plano Familiar" ? "Idade do dependente" : "Faixa Etária"}
                </TableHead>
                <TableHead className="w-[64px]">Valores</TableHead>
                <TableHead className="w-[64px]">Carência</TableHead>
                <TableHead className="w-[64px]">Vantagens</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plano.dados.map((item, itemIndex) => (
                <TableRow key={itemIndex}>
                  <TableCell>{item.faixa_etaria}</TableCell>
                  <TableCell>{item.valor}</TableCell>
                  <TableCell>{item.carencia}</TableCell>
                  <TableCell>{item.vantagens}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </>
  )
}
