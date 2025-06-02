import React from 'react'
import GlobeSVG from './svgs/globe'
import SparkSVG from './svgs/spark'
import TransportSVG from './svgs/transport'
import ShieldSVG from './svgs/shield'
import EnterOpacity from './enter-opacity'

const cards = [
  {
    id: 1,
    text: 'Conectamos tu negocio con proveedores y clientes en todo el mundo.',
    icon: <GlobeSVG />,
  },
  {
    id: 2,
    text: 'Tramitamos tus importaciones y exportaciones con precisión y rapidez.',
    icon: <SparkSVG />,
  },
  {
    id: 3,
    text: 'Transporte marítimo, aéreo o terrestre. Coordinamos de punta a punta.',
    icon: <TransportSVG />,
  },
  {
    id: 4,
    text: 'Diseñamos operaciones eficientes y seguras para tu cadena de suministro.',
    icon: <ShieldSVG />,
  },
]

export default function Cards() {
  const cardElements = cards.map((card) => (
    <div key={card.id} className="relative w-full">
      <div className="before:content-[''] before:block before:pt-[100%]" />
      <div className="absolute inset-0 rounded-[16px] bg-zinc-900 drop-shadow-xl flex flex-col items-center justify-center p-4 text-zinc-200 hover:outline">
        <div className="w-full flex flex-col items-center justify-center gap-2 px-2">
          {card.icon}
          <p className="text-[clamp(12px,1.5vw,20px)] text-center leading-snug break-words">
            {card.text}
          </p>
        </div>
      </div>
    </div>
  ))

  return (
    <EnterOpacity
    initial={{ y: 50, opacity: 0 }}
    >
    <section className=" grid grid-cols-2 md:grid-cols-4 gap-[1rem] p-[1rem] w-full">
      {cardElements}
    </section>
    </EnterOpacity>
  )
}