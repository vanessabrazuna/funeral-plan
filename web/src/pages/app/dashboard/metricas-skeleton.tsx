import { Skeleton } from "@/components/ui/skeleton"

export function MetricasSkeleton() {
  return (
    <>
      <div className="flex items-center gap-3">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-4 w-32" />
      </div>
      <div className="flex items-center gap-3">
        <Skeleton className="h-6 w-14 mt-1" />
        <Skeleton className="h-4 w-24" />
      </div>
    </>
  )
}