import React from 'react'
import LogoTvium from '../../site/logo'
import DashUserRoutes from './dash-user-routes'
import LogOutButton from '../../navigation/logout'

export default function NavDashUser() {
  return (
        <nav className='h-full flex flex-col'>
            <LogoTvium container='h-[100px] pt-2' className='h-[50px] text-2xl'/>
            <DashUserRoutes/>
            <LogOutButton/>
        </nav>
  )
}
