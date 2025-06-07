// app/componentes/TransviumData.tsx
import { createClient } from '@/utils/supabase/server';

export default async function TransviumData() {
  const supabase = await createClient();

  const { data, error } = await supabase.from('transvium_table').select();

  if (error) {
    return <p>Error al cargar los datos: {error.message}</p>;
  }

  return (
    <div>
      <h2>Operaciones registradas</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
