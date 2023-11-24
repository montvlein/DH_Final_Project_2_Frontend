export default async function GetTickets (): Promise<any> {
  const response = await fetch('http://ec2-3-208-12-227.compute-1.amazonaws.com:8080/event/ticket')

  if (!response.ok) {
    throw new Error('Error en la carga de eventos')
  }

  return await response.json()
}