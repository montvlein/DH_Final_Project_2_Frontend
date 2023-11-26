export default async function GetTickets(): Promise<any> {
  const response = await fetch('https://api.goldenticket.ar/event/ticket')

  if (!response.ok) {
    throw new Error('Error en la carga de eventos')
  }

  return await response.json()
}