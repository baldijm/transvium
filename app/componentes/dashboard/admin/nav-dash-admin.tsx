import React from 'react'
import LogoTvium from '../../site/logo'
import DashAdminRoutes from './dash-admin-routes'

export default function NavDashAdmin() {
  return (
        <nav className='h-full flex flex-col'>
            <LogoTvium container='h-[100px] pt-2' className='h-[50px] text-2xl'/>
            <DashAdminRoutes/>
        </nav>
  )
}
