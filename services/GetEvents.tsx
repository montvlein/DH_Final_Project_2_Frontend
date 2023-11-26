export default async function GetEvents(): Promise<any> {
  const response = await fetch('https://api.goldenticket.ar/event')

  if (!response.ok) {
    throw new Error('Error en la carga de eventos')
  }

  return await response.json()
}
