export default async function GetEvents (): Promise<any> {
  const response = await fetch('http://ec2-3-208-12-227.compute-1.amazonaws.com:8080/event')

  if (!response.ok) {
    throw new Error('Error en la carga de eventos')
  }

  return await response.json()
}
