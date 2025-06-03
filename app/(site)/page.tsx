import React from 'react'
import VideoTest from '../componentes/site/videotest'
import HeroSectionTransvium from '../componentes/site/herosectiontransvium'
import Cards from '../componentes/site/cards'
import EnterOpacity from '../componentes/site/enter-opacity'
import HowItWorks from '../componentes/site/howitworks'
import FooterTransvium from '../componentes/site/footer'

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
