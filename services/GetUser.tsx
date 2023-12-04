import { GoldenApi } from '@/api/data'

export default async function GetUserInfo (): Promise<any> {
  const baseApi = GoldenApi.base
  const endpoint = GoldenApi.endoints.user.data
  const storedToken = localStorage.getItem('token')
  if (storedToken != null) {
    try {
      const opt = {
        method: 'GET',
        headers: {
          token: storedToken,
          'Content-Type': 'application/json'
        }
      }
      const response = await fetch(baseApi + endpoint, opt)
      if (!response.ok) {
        throw new Error('Error en la carga de usuario')
      }
      return await response.json()
    } catch (error) {
      console.error('Error al obtener la información del usuario:', error)
    }
  }
  return null
}
