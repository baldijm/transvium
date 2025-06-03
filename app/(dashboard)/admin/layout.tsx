import NavDashAdmin from '@/app/componentes/dashboard/admin/nav-dash-admin';
import React from 'react';

export default function DashboardAdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-zinc-900 text-white p-4">
        {/* Tu navegación aquí */}
        <NavDashAdmin/>
      </aside>
      <main className="flex-1 bg-neutral-950 p-6">{children}</main>
    </div>
  );
}
