import { ArrowsRightLeftIcon, ChatBubbleLeftRightIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline';
import React from 'react'

type CardProps = {
    title: string;
    value: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    color: string;
}

function DashboardCard({ title, value, icon: Icon, color }: CardProps) {
  return (
    <div className="flex w-full p-2 items-center bg-neutral-800 hover:bg-neutral-700 transition-colors rounded-xl cursor-pointer">
      <div className={`flex gap-1 ${color}`}>
        <Icon className={`h-6 w-6 ${color}`} />
        <h3 className=" text-gray-400 text-center">{title}</h3>
      </div>
      <div className='flex flex-col items-center ml-auto'>
        <p className=" font-bold text-white pr-2">{value}</p>
      </div>
    </div>
  )
}

export default function InvoicePanel() {
  return (
    <div className="h-max text-white">

      <div className="flex flex-col gap-1 w-full">
        <DashboardCard
          title="Solicitudes"
          value="10"
          icon={InboxIcon}
          color="text-blue-400"
        />
        <DashboardCard
          title="Mensajes"
          value="8"
          icon={ChatBubbleLeftRightIcon}
          color="text-green-400"
        />
        <DashboardCard
          title="Operaciones activas"
          value="4"
          icon={ArrowsRightLeftIcon}
          color="text-yellow-400"
        />
        <DashboardCard
          title="Clientes activos"
          value="12"
          icon={UsersIcon}
          color="text-purple-400"
        />
      </div>
    </div>
  )
}