import React from 'react'
import Modal from './modal'
import EnterOpacity from './enter-opacity'

export default function HeroSectionTransvium() {
  return (
    <section className=' h-full w-full flex items-center justify-center'>
      <div id='wrapper' className='flex flex-col justify-center items-center h-max gap-[0.5rem] mt-[3rem] xl:mt-0 text-center'>
        <EnterOpacity>
          <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='leading-[1.1] text-shadow text-[clamp(35px,6vw,80px)] font-satoshi-black'>
          <span className='block'><span className='text-[#E74C3C]'>Máximo</span> rendimiento</span>
          <span className='block'>para tu operación logística</span>
          <span className='block '></span>
        </h1>
        <p className='font-satoshi-regular text-gray-300'>Empresas y emprendedores nos eligen para hacer que sus operaciones internacionales sean más ágiles, eficientes y seguras.</p>
        </div>
        </EnterOpacity>
        <EnterOpacity
        initial={{y: 15, opacity: 0}}
        transition={{ delay:0.10, duration: 0.6, ease: 'easeInOut'}}
        className='w-max'
        >
          <Modal/>
        </EnterOpacity>
      </div>
    </section>
  )
}
