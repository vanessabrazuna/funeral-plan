import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { tabelaDePreco } from "@/data/tabela-de-preco"

export function TabelaObservacoes() {
  return (
    <div className="border border-zinc-200 rounded-md p-4 mt-6 shadow-sm">
      <h2 className="text-xl font-bold mb-3 border-b pb-2">Observações</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <span className="text-blue-600">Adesão</span>
        </h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[64px]">Local</TableHead>
              <TableHead className="w-[64px]">Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tabelaDePreco.adesao.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.local}</TableCell>
                <TableCell>{item.valor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <span className="text-blue-600">Clube de Vantagem</span>
        </h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[64px]">Tipo</TableHead>
              <TableHead className="w-[64px]">Valor</TableHead>
              <TableHead className="w-[64px]">Adesão</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tabelaDePreco.clubeDeVantagem.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.tipo}</TableCell>
                <TableCell>{item.valor}</TableCell>
                <TableCell>{item.adesao}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-semibold flex items-center">
          <span className="text-blue-600">Telemedicina</span>
        </h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[64px]">Tipo</TableHead>
              <TableHead className="w-[64px]">Valor</TableHead>
              <TableHead className="w-[64px]">Adesão</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tabelaDePreco.telemedicina.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.tipo}</TableCell>
                <TableCell>{item.valor}</TableCell>
                <TableCell>{item.adesao}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}