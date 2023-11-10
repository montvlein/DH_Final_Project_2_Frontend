import type { User } from './../../../models/User'
export async function listarUsuarios (): Promise<User[]> {
  const apiUrl = 'http://localhost:3000/api/users/read'

  const response = await fetch(apiUrl)

  if (response.status === 200) {
    const data = await response.json()
    return data as User[]
  } else {
    throw new Error('No se pudo obtener la lista de usuarios')
  }
}
