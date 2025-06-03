import React from 'react';

export default function DashboardUserLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-600 text-white p-4">
        Bienvenido, Cliente
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
