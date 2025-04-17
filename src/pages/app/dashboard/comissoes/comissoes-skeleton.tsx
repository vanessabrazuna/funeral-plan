import { 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import { Skeleton } from "@/components/ui/skeleton"

export function ComissoesSkeleton() {
  return (
    <>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Skeleton className='my-1 h-5 w-52' />
          </TableHead>
        </TableRow>
        <TableRow>
          <TableHead>Adesões</TableHead>
          <TableHead>Recorrências</TableHead>
        </TableRow>
      </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Skeleton className='h-6 w-20' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-6 w-20' />
            </TableCell>
          </TableRow>
      </TableBody>
    </>
  )
}