import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"

export function TabelaFiltro({ 
  onFilterChange }: { onFilterChange: (filter: string) => void 
}) {
  const [filterValue, setFilterValue] = useState("")

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setFilterValue(value)
    if (value === "") {
      onFilterChange("")
    }
  };

  const handleFilterSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onFilterChange(filterValue)
  }

  const handleRemoveFilter = () => {
    setFilterValue("")
    onFilterChange("")
  }

  return (
    <form
      onSubmit={handleFilterSubmit}
      className="flex items-start md:items-center gap-2 flex-col md:flex-row"
    >
      <span className="text-sm font-semibold">Filtros:</span>
      <Input
        placeholder="Nome do plano"
        value={filterValue}
        onChange={handleFilterChange}
        className="h-9 w-[320px] ring-1 ring-violet-400 dark:ring-0 dark:focus:ring"
      />

      <div className="flex gap-2">
        <Button type="submit" variant="secondary" className="size-auto">
          <Search className="mr-2 h-4 w-4" />
          Filtrar por plano
        </Button>

        <Button type="button" variant="outline" onClick={handleRemoveFilter} className="size-auto">
          <X className="mr-2 h-4 w-4" />
          Remover filtro
        </Button>
      </div>
    </form>
  )
}
