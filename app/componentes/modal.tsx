'use client'

import React, { useState } from 'react'
import ArrowRightSVG from './svgs/arrow-right'

export default function Modal() {
  // Estado para controlar si el modal está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true)
    // Desactivar el scroll de la página cuando el modal está abierto
    document.body.classList.add('modal-open');
  }

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false)
    // Restaurar el scroll de la página
    document.body.classList.remove('modal-open');
  }

  // Función para manejar clics fuera del modal para cerrarlo
  const handleOverlayClick = (e: React.MouseEvent) => {
    // Cerrar modal solo si el clic fue fuera del contenido
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div className='w-max'>
      {/* Botón para abrir el modal */}
      <button
        onClick={openModal}
        className='cursor-pointer font-satoshi-medium justify-self-start bg-[rgba(24,24,27,0.62)] p-[0.8rem] mt-[1rem] rounded-[3.5px] backdrop-blur-[8px] outline  xs:outline-1 outline-zinc-800 lg:hover:bg-zinc-800 text-zinc-100 xs:active:bg-zinc-800 flex gap-2'
      >
        Consulta profesional <ArrowRightSVG />
      </button>

      {/* Modal - solo se muestra si isModalOpen es true */}
      {isModalOpen && (
        <div
          className='fixed inset-0 flex items-center justify-center z-50 bg-black/50'
          onClick={handleOverlayClick} // Cerrar modal al hacer clic fuera
        >
          <div className='bg-[rgba(24,24,27,0.85)] backdrop-blur-[12px] w-[90%] max-w-md rounded-lg p-6 shadow-lg'>
            <h2 className='text-xl font-satoshi-black text-white mb-4'>
              Formulario de consulta
            </h2>
            <form className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-300'>Nombre</label>
                <input
                  type='text'
                  name='nombre'
                  className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-black bg-white'
                  placeholder='Tu nombre'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-300'>Correo electrónico</label>
                <input
                  type='email'
                  name='email'
                  className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-black bg-white'
                  placeholder='Tu correo'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-300'>Mensaje</label>
                <textarea
                  name='mensaje'
                  className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-black bg-white'
                  placeholder='¿En qué podemos ayudarte?'
                  rows={4}
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-300'>Tipo de servicio</label>
                <select
                  name='servicio'
                  className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-black bg-white'
                >
                  <option value='importaciones'>Importaciones</option>
                  <option value='exportaciones'>Exportaciones</option>
                  <option value='asesoria'>Asesoría</option>
                </select>
              </div>
              <div className='flex justify-end gap-4 mt-6'>
                <button
                  type='button'
                  onClick={closeModal}
                  className='px-4 py-2 bg-gray-700 rounded-md text-white hover:bg-gray-800'
                >
                  Cerrar
                </button>
                <button
                  type='submit'
                  className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
