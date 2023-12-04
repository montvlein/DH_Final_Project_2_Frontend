import { GoldenApi } from '@/api/data'

export default async function GetReport (eventId: any, dataStart: any, dateEnd: any): Promise<any> {
  const baseApi = GoldenApi.base
  const search = `idEvent=${eventId}&start=${dataStart}&end=${dateEnd}`
  const endpoint = GoldenApi.endoints.report.get + search
  try {
    const response = await fetch(baseApi + endpoint)
    if (!response.ok) {
      throw new Error('Error en la carga de reporte')
    }
    return await response.json()
  } catch (error) {
    console.error('Error al obtener la información del reporte:', error)
  }

  return []
}
