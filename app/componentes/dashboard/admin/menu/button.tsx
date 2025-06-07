'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowsRightLeftIcon, Bars3Icon, HomeIcon, InboxIcon} from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import LogOutButton from '@/app/componentes/navigation/logout';
import Link from 'next/link';


export default function ButtonMenuAdminDashboard() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true)
    }

      const handleOverlayClick = (e: React.MouseEvent) => {
        // Cerrar modal solo si el clic fue fuera del contenido
        if (e.target === e.currentTarget) {
          setIsMenuOpen(false)
        }
      }

  return (
    <>
        <button className='ml-auto' onClick={openMenu}>
          <Bars3Icon className=' h-6 w-6 text-[var(--foreground)]'/>
        </button>
        <AnimatePresence>
        {isMenuOpen && (
            <div 
            className="fixed inset-0 z-50 bg-neutral-950/50 backdrop-blur-[9px] flex items-end"
            onClick={handleOverlayClick}
>
                <motion.div
                initial={{ height: 0 }}
                animate={{ height: '62%' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="gap-1 flex flex-col bg-zinc-950 w-full p-4 overflow-hidden rounded-t-lg border-t-1 border-zinc-700"
            >
                <Link href={`/admin`} onClick={handleOverlayClick} className='text-md flex items-center gap-1 active:bg-zinc-900'><HomeIcon className='h-5 w-5'/>General</Link>
                <Link href={`/admin/bandeja`} onClick={handleOverlayClick} className='text-md flex items-center gap-1 active:bg-zinc-900'><InboxIcon className='h-5 w-5'/>Bandeja</Link>
                <Link href={`/admin/operaciones`} onClick={handleOverlayClick} className='text-md flex items-center gap-1 active:bg-zinc-900'><ArrowsRightLeftIcon className='h-5 w-5'/>Operaciones</Link>
                <LogOutButton/>
            </motion.div>
            </div>
        )}
        </AnimatePresence>
    </>
  )
}
