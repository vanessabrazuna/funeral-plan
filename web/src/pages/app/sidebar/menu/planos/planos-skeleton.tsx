import { Skeleton } from "@/components/ui/skeleton"
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table"

export function PlanosSkeleton({ isLoading, rowCount = 6 }: { isLoading: boolean; rowCount?: number }) {
  
  if (!isLoading) {
    return null
  }

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[140px]">Plano Funeral</TableHead>
            <TableHead className="w-[132px]">Adesão</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Comercializável</TableHead>
            <TableHead className="w-[64px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: rowCount }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-16" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-96" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-16" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-8 w-8" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
