'use server'

import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/')
        console.error('User not found after login attempt')
    }

    const {data: profile, error: profileError} = await supabase
      .from('profiles')
      .select('rol')
      .eq('id', user.id)
    .single()

    if (profileError || !profile) {
        console.error('Profile not found or error fetching profile:', profileError)
        redirect('/')
    }

    const role = profile.rol

    if (role === 'admin') {
        redirect('/admin')
    } else if (role === 'user') {
        revalidatePath('/user','layout')
        redirect('/user')
    } else {
        redirect('/')
        console.error('Unknown role:', role)
    }
}