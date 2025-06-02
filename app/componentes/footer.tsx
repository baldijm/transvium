import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import SVGLogo from "./svgtrans";

export default function FooterTransvium() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 px-6 py-10 mt-16 text-sm">
      <div className="max-w-6xl mx-auto grid gap-3 md:grid-cols-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center h-[2rem]">
            <SVGLogo/>
            <h3 className="text-white font-satoshi-bold text-lg">Transvium</h3>
          </div>          
          <p>Soluciones logísticas integrales para negocios globales.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contacto</h4>
          <ul className="space-y-1">
            <li className="text-pretty flex gap-1"><MapPinIcon className="w-8 h-8 mt-[-.4rem] text-zinc-400" /> <p className="grid"><span>Torre Arcos Bosques I</span>
            Paseo de los Tamarindos No. 400 A, Colonia Bosques de las Lomas, Delegación Cuajimalpa, Ciudad de México.</p>
            </li>
            <li className="flex gap-1"><PhoneIcon className="w-4 h-4 text-zinc-400 mt-[2px]" /> +52 33 1351 6202</li>
            <li className="flex gap-1"><EnvelopeIcon className="w-4 h-4 text-zinc-400 mt-[4px]" /> contacto@transvium.com</li>
          </ul>
        </div>

      </div>
      <div className="mt-8 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Transvium. Todos los derechos reservados.
      </div>
    </footer>
  )
}
