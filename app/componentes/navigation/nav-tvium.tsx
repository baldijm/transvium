import React from 'react'
import LogoTvium from '../site/logo'

export default function NavTvium() {
  return (
    <nav className=' fixed w-full flex z-10'>
      <div className='h-[4.4rem] w-full flex items-center p-4 bg-[rgba(0,0,0,0.65)] backdrop-blur-[12px] md:bg-transparent md:backdrop-blur-none lg:mt-[2rem] lg:mx-[4rem]'>
          <LogoTvium className='h-[50px] flex items-center text-2xl'/>
      </div>
    </nav>
  )
}

/**
 *     <nav className=' fixed w-full flex z-10'>
      <div className='flex items-center p-4 h-[4.4rem] mt-[2rem] ml-[4rem] mr-[4rem] w-full from-ml-to-b:m-0 from-ml-to-b:bg-[rgba(f,f,f,f.65)] from-ml-to-b:backdrop-blur-[12px] from-htal-to-vcal:ml-[.5rem] from-htal-to-vcal:mr-[.5rem] from-htal-to-vcal:mt-[.5rem]'>
        <SVGLogo/>
        <Link href="/" className='text-3xl from-ml-to-b:text-2xl font-satoshi-bold'>Transvium</Link>
      </div>
    </nav>
 */