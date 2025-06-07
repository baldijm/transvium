import React, { ReactNode } from 'react'
import NavDashUser from '@/app/componentes/dashboard/user/nav-user-dash'

export default async function DashboardUserLayout({
  children,
}: {
  children: ReactNode
  params: { cuenta: string }
}) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-zinc-900 text-white p-4">
        <NavDashUser/>
      </aside>
      <main className="flex-1 bg-neutral-950 p-6">{children}</main>
    </div>
  )
}
