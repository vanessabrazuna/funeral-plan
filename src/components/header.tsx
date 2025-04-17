import { useState } from "react"
import { AlignJustify } from "lucide-react"
import { ThemeToggle } from "./theme/theme-toggle"
import { MeuPerfil } from "./meu-perfil"
import { Separator } from "./ui/separator"
import { NavLink } from "./nav-link"
import { Sidebar } from "@/pages/app/sidebar"

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-4 md:gap-6 px-2 md:px-6">
        <AlignJustify 
          className="h-6 w-6 cursor-pointer"
          onClick={toggleSidebar}
        />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex flex-col md:flex-row md:items-center space-x-0 md:space-x-4 lg:space-x-6 space-y-1 md:space-y-0">
          <NavLink to="/">
            Início
          </NavLink>
          <NavLink to="/tabela-de-preco">
            Tabela de preços
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <span className="hidden md:block">
            <ThemeToggle />
          </span>
          <MeuPerfil />
        </div>
      </div>

      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />}
    </div>
  )
}