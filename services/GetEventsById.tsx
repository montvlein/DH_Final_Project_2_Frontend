export default async function GetEventsById (id: string): Promise<any> {
  const response = await fetch(`https://api.goldenticket.ar/event/ticket/${id}`)

  if (!response.ok) {
    throw new Error('Error en la carga de eventos')
  }

  return await response.json()
}
