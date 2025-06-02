import React from 'react';

export default function DashboardAdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Aquí puedes poner tu navbar o sidebar */}
      <nav className="bg-gray-900 text-white p-4">Admin Navbar</nav>

      <main className="flex-grow p-6">
        {children}
      </main>
    </div>
  );
}
