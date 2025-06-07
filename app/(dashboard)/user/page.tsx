import { createClient } from '@/utils/supabase/server'

export default async function UserPage() {
  const supabase = await createClient()
  
  const { data: { user }, error: userError } = await supabase.auth.getUser()
  // Consulta el perfil basado en la cuenta (o user id si tienes)
  
  if( userError || !user) {
    return <div className="text-white p-4">No se encontró el usuario</div>
  }
  
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('email, cuenta, name')
    .eq('id', user.id )
    .single()

  if (error || !profile) {
    return <div className="text-white p-4">No se encontró el perfil</div>
  }

  return (
    <div className="text-white p-4">
      <h1 className="text-2xl font-bold">Bienvenido {profile.name}</h1>
      <h2>Cuenta: #{profile.cuenta}</h2>
    </div>
  )
}
