import { X } from 'lucide-react'
import { Navegacao } from './navegacao'
import { useState, useEffect } from 'react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isFullyClosed, setIsFullyClosed] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsFullyClosed(false)
      setTimeout(() => setIsAnimating(true), 10)
    } else {
      setIsAnimating(false)
    }
  }, [isOpen])

  function handleTransitionEnd() {
    if (!isOpen) {
      setIsFullyClosed(true)
    }
  };

  return (
    <>
      {!isFullyClosed && (
        <aside
          className={`fixed left-0 top-0 z-20 h-full w-72 flex flex-col gap-6 bg-background overflow-hidden border-r p-4 transition-all duration-500 ease-in-out
            ${isAnimating ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className="flex justify-between items-center">
            <strong className='text-xl'>Menu</strong>
            <X className="h-6 w-6 cursor-pointer" onClick={onClose} />
          </div>

          <div className="flex flex-1 flex-col gap-6">
            <Navegacao onClose={onClose} />
          </div>
        </aside>
      )}
    </>
  )
}
