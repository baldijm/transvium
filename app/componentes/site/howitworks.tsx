import { BriefcaseIcon, ClipboardIcon, WrenchScrewdriverIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const pasos = [
  {
    icon: <BriefcaseIcon className="h-6 w-6 text-yellow-400" />,
    titulo: "01. Primer contacto",
    descripcion: "Escuchamos tu necesidad o proyecto y analizamos los requerimientos específicos.",
  },
  {
    icon: <ClipboardIcon className="h-6 w-6 text-yellow-400" />,
    titulo: "02. Diagnóstico y propuesta",
    descripcion: "Armamos un plan claro para importar, exportar o gestionar tu operación internacional.",
  },
  {
    icon: <WrenchScrewdriverIcon className="h-6 w-6 text-yellow-400" />,
    titulo: "03. Ejecución y coordinación",
    descripcion: "Coordinamos transporte, aduana, documentación y seguimiento logístico.",
  },
  {
    icon: <CheckCircleIcon className="h-6 w-6 text-yellow-400" />,
    titulo: "04. Entrega y seguimiento",
    descripcion: "Finalizamos la operación asegurando que todo llegue correctamente y a tiempo.",
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full px-6 py-12 flex flex-col items-center text-white gap-8 bg-zinc-950">
      <h2 className="text-3xl font-satoshi-bold text-center">¿Cómo trabajamos?</h2>
      <div className="grid gap-6 md:grid-cols-2 w-full max-w-5xl">
        {pasos.map((paso, index) => (
          <div key={index} className="bg-zinc-900 p-5 rounded-xl flex gap-4 items-start shadow-md">
            <div className="shrink-0 p-2 bg-zinc-800 rounded-full">
              {paso.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{paso.titulo}</h3>
              <p className="text-sm text-zinc-400">{paso.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
