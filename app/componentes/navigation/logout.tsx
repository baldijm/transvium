'use client';
import { supabase } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function LogOutButton() {
    const router =useRouter() 
    async function handleLogOut() {
        const {error} = await supabase.auth.signOut()
        if (error) {
            alert('No se pudo cerrar sesión, por favor intenta de nuevo.');
            console.error('Error al cerrar sesión:', error.message)
        }
        router.push('/')
    }

  return (
    <button onClick={handleLogOut} className=' w-max p-1 px-2 bg-zinc-900 rounded mt-auto cursor-pointer'>Cerrar Sesión</button>
  )
}
