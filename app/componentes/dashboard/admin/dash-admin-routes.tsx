import { ClipboardDocumentListIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import React from 'react'

const routes = [
    {href:"/admin/bandeja", name:"Bandeja", icon:InboxIcon},
    {href:"/admin/operaciones", name:"Operaciones", icon:ClipboardDocumentListIcon},
    {href:"/admin/clientes", name:"Clientes", icon:UsersIcon},
];

export default function DashAdminRoutes() {
  return (
    <ul className='flex flex-col gap-2'>
    {routes.map(({href, name, icon: Icon}) => (
        <li key={href} className='hover:bg-zinc-950 p-2 rounded'>
            <Link href={href} className='flex items-center gap-1'>
            <Icon className='h-4 w-4'/>
            <p>{name}</p>
            </Link>
        </li>
    ))}
    </ul>
  )
}
