import React from 'react'
import VideoTest from './componentes/videotest'
import HeroSectionTransvium from './componentes/herosectiontransvium'
import Cards from './componentes/cards'
import EnterOpacity from './componentes/enter-opacity'
import HowItWorks from './componentes/howitworks'
import FooterTransvium from './componentes/footer'

export default function TransviumHome() {
  return (
    <div id="scroll-container" className='h-full w-full flex flex-col'>
      <div className='h-[620px] w-full lg:h-screen md:h-screen relative flex flex-col'>
        <VideoTest/>
        <div className='mt-[3rem] gap-[2rem] h-full relative p-[1rem] flex flex-col'>
            <HeroSectionTransvium/>
        </div>
      </div>
      <div className='h-[500px] flex justify-center items-center'>
        <div className='h-max w-full'>
        <Cards/>
        </div>
      </div>
      <EnterOpacity      >
        <HowItWorks/>
      </EnterOpacity>
      <FooterTransvium/>
    </div>
  )
}
