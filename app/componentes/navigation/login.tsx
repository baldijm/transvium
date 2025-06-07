'use client'

import React, { useState } from 'react'
import LogOutButton from './logout'
import { login } from '@/app/login/actions'

export default function LoginModal() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const openModal = () => {
    setIsModalOpen(true)
    document.body.classList.add('modal-open')
  }

    const closeModal = () => {
    setIsModalOpen(false)
    document.body.classList.remove('modal-open')
  }

    const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div className="w-max ml-auto">
      {/* Botón para abrir el modal */}
      <button
        onClick={openModal}
        className="cursor-pointer font-satoshi-medium px-1.5 py-2 rounded-[3.5px] underline-offset-4 underline"
      >
        Entrar
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 h-screen"
          onClick={handleOverlayClick}
        >
          <div className="bg-[rgba(24,24,27,0.85)] backdrop-blur-[12px] w-[90%] max-w-md rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-satoshi-black text-white mb-4">Acceder a tu cuenta</h2>
                <form className='flex flex-col'>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-black bg-white'/>
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-black bg-white'/>
                <button formAction={login} className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>Entrar</button>
              </form>
            <LogOutButton/>
          </div>
        </div>
      )}
    </div>
  )
}
/** *
 *   const router = useRouter()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    document.body.classList.add('modal-open')
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.classList.remove('modal-open')
    setError(null)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const handleLogin = async () => {
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      setError('No se pudo obtener el usuario autenticado.')
      setLoading(false)
      return
    }

    // Consultar el perfil completo para obtener rol y cuenta
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('rol, cuenta')
      .eq('id', user.id)
      .single()

    if (profileError || !profile) {
      setError('No se encontró el perfil del usuario.')
      setLoading(false)
      return
    }

    closeModal()

    if (profile.rol === 'admin') {
      router.push(`/admin/${profile.cuenta}`)
    } else if (profile.rol === 'user') {
      router.push(`/${profile.cuenta}`)
    } else {
      router.push('/')
    }

    setLoading(false)
  }
 *             <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                handleLogin()
              }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-300">Correo electrónico</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-black bg-white"
                  placeholder="usuario@dominio.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-black bg-white"
                  placeholder="Tu contraseña"
                  required
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-700 rounded-md text-white hover:bg-gray-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {loading ? 'Entrando...' : 'Entrar'}
                </button>
              </div>
            </form>
*/

