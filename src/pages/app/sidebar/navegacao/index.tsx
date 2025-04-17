import { 
  Home, 
  Gem, 
  Users, 
  Contact, 
  Handshake, 
  Landmark, 
  Layers, 
  Captions, 
  Link2, 
  Zap, 
  ClipboardList, 
  ClipboardCheck, 
  Settings, 
  LogOut 
} from 'lucide-react'

import { ItemsNavegacao } from '@/pages/app/sidebar/navegacao/itens-navegacao'

interface NavegacaoProps {
  onClose: () => void
}

export function Navegacao({ onClose }: NavegacaoProps) {
  return (
    <nav className="flex flex-col gap-0.5">
      <ItemsNavegacao 
        icon={Home} title="Dashboard" to="/" onClose={onClose} 
      />

      <ItemsNavegacao 
        icon={Gem} title="Planos" to="/planos" onClose={onClose} 
      />

      <ItemsNavegacao 
        icon={Users} title="Associados" to="/associados" onClose={onClose} 
      />

      <ItemsNavegacao 
        icon={Contact} title="Funcionários" to="/funcionarios" onClose={onClose} 
      />

      <ItemsNavegacao 
        icon={Handshake} title="Consultores" to="/consultores" onClose={onClose} 
      />

      <ItemsNavegacao 
        icon={Landmark} title="Instituições" to="/instituicoes" onClose={onClose} 
      />

      <ItemsNavegacao 
        icon={Layers} title="Importação" to="/importacao" onClose={onClose} 
      />

      <ItemsNavegacao 
        icon={Captions} title="Ações em massa" to="/acoes-em-massa" onClose={onClose} 
      />

      <ItemsNavegacao 
        icon={Link2} title="Links" to="/links" onClose={onClose} 
      />

      <ItemsNavegacao 
        icon={Zap} title="Asaas" to="/asaas" onClose={onClose} 
      />

      <ItemsNavegacao 
        icon={ClipboardList} title="Relatórios" to="/relatorios" onClose={onClose} 
      />

      <ItemsNavegacao 
        icon={ClipboardCheck} title="Auditoria" to="/auditoria" onClose={onClose} 
      />

      <ItemsNavegacao 
        icon={Settings} title="Configurações" to="/configuracoes" onClose={onClose} 
      />

      <ItemsNavegacao 
        icon={LogOut} title="Sair" to="/logout" onClose={onClose} 
      />
    </nav>
  )
}
