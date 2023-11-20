import type { NextApiRequest, NextApiResponse } from 'next'

import { userList } from '../../../api/data'

const login = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    const { mail, password } = req.body as { mail: string, password: string }

    const user = userList?.find((user) => user?.mail === mail)

    if (user !== undefined && user?.password === password) {
      const token = user.id
      user.password = undefined

      res.status(200).json({ token, user })
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' })
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' })
  }
}

export default login
