import { ElementType } from 'react'
import { Link } from 'react-router-dom'

interface ItemsNavegacaoProps {
  title: string
  icon: ElementType
  to?: string
  onClose: () => void
}

export function ItemsNavegacao({ title, icon: Icon, to, onClose }: ItemsNavegacaoProps) {
  const content = (
    <div className="group flex items-center gap-3 rounded px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 hover:bg-muted">
      <Icon className="h-5 w-5 flex-shrink-0" />
      <span className="font-medium group-hover:text-primary dark:text-zinc-100 dark:group-hover:text-zinc-50">
        {title}
      </span>
    </div>
  )

  if (to) {
    return <Link to={to} onClick={onClose}>{content}</Link>
  }

  return <a href="" className="group flex items-center gap-3 rounded px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500 hover:bg-muted" onClick={onClose}>{content}</a>
}
