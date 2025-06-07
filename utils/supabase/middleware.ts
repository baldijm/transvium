import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const PUBLIC_ROUTES = ['/']
const ROLE_PROTECTED_ROUTES = {
  '/admin': 'admin',
  '/user': 'user',
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()
  const pathname = request.nextUrl.pathname

  // 1. Redirige si no hay usuario y no está en una ruta pública
  if (!user && !PUBLIC_ROUTES.includes(pathname)) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  // 2. Si hay usuario, valida el rol si accede a rutas protegidas
  if (user) {
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('rol')
      .eq('id', user.id)
      .single()

    if (error || !profile) {
      const url = request.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.redirect(url)
    }

    // Verifica el acceso según el rol y ruta
    for (const [route, role] of Object.entries(ROLE_PROTECTED_ROUTES)) {
      if (pathname.startsWith(route) && profile.rol !== role) {
        const url = request.nextUrl.clone()
        url.pathname = '/'
        return NextResponse.redirect(url)
      }
    }
  }

  return supabaseResponse
}
