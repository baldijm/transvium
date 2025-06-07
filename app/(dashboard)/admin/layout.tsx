import React, { ReactNode } from 'react'
import LogoTvium from '@/app/componentes/site/logo'
import ButtonMenuAdminDashboard from '@/app/componentes/dashboard/admin/menu/button'


export default async function DashboardAdminLayout({
  children,
}: { 
  children: ReactNode
  params: { cuenta: string}
}) {

  return (
    <div className="h-screen">
      <header className='flex p-4'>
        <LogoTvium className='h-[2.6rem] text-2xl'/>
        <ButtonMenuAdminDashboard/>
      </header>
      <main className="flex-1 bg-neutral-950 p-6">{children}</main>
    </div>
  )
}

/**
 *       <aside className="w-64 bg-zinc-900 text-white p-4">
        <NavDashAdmin cuenta={cuenta}/>
      </aside>
 */