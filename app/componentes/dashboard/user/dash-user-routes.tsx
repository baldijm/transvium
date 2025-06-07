import { ClipboardDocumentListIcon, InboxIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import React from 'react'

const routes = [
    {path:"bandeja", name:"Bandeja", icon:InboxIcon},
    {path:"operaciones", name:"Operaciones", icon:ClipboardDocumentListIcon},
];

export default function DashUserRoutes() {
  return (
    <ul className='flex flex-col gap-2'>
    {routes.map(({path, name, icon: Icon}) => (
        <li key={path} className='hover:bg-zinc-950 p-2 rounded'>
            <Link href={`/user/${path}`} className='flex items-center gap-1'>
            <Icon className='h-4 w-4'/>
            <p>{name}</p>
            </Link>
        </li>
    ))}
    </ul>
  )
}
