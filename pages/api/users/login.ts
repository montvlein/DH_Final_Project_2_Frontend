import type { NextApiRequest, NextApiResponse } from 'next'

// import { listarUsuarios } from './listarUsuarios'
// import type { User } from './../../../models/User'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    const { email, password } = req.body as { email: string; password: string }

    // const users: User[] = await listarUsuarios()
    // console.log(users)

    // const usuario = users.find((user) => user.email === email)
    const usuarioHardcodeado = {
      email: 'doloresalemang@gmail.com',
      password: 'Dolores123'
    }
    if (usuarioHardcodeado.email === email && usuarioHardcodeado.password === password) {
      const token = 'tokenDeIngreso'

      res.status(200).json({ token })
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' })
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' })
  }
}
