import { GoldenApi } from '@/api/data'

export default async function GetEvents(): Promise<any> {
  const baseApi = GoldenApi.base
  const endpoint = GoldenApi.endoints.event.all
  const response = await fetch(baseApi + endpoint)

  if (!response.ok) {
    throw new Error('Error en la carga de eventos')
  }

  return await response.json()
}
