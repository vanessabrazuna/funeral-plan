import { HopOff } from "lucide-react"
import { Outlet } from "react-router-dom"
import ImageLogoStg from "@/assets/logos/stg_logo.png"

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted md:p-10 text-muted-foreground order-2 md:order-1">
        <div className="flex items-center justify-center md:justify-start gap-3 text-lg text-foreground pt-6">
          <HopOff className="h-5 w-5" />
          <span className="font-semibold">serenidade</span>
        </div>
        <div>
          <img src={ImageLogoStg} alt="" className="hidden md:block invert-75 dark:invert-0" />
        </div>
        <footer className="text-sm text-center md:text-start pb-3 md:pb-0">
          &copy; {new Date().getFullYear()} B2BTech - Todos os direitos reservados
        </footer>
      </div>

      <div className="relative flex justify-center items-center order-1 md:order-2">
        <Outlet />
      </div>
    </div>
  )
}