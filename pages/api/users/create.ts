// pages/api/users/create.js

import { type NextApiRequest, type NextApiResponse } from 'next'
import { userList } from '../../../api/data'

let nextUserId = 1

const createUser = (req: NextApiRequest, res: NextApiResponse): any => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, password } = req.body as {
      firstName: string
      lastName: string
      email: string
      password: string
    }

    if (firstName !== '' && lastName !== '' && email !== '' && password !== '') {
      res.status(400).json({ error: 'Faltan campos obligatorios' }); return
    }

    const newUser = {
      id: nextUserId++,
      firstName,
      lastName,
      email,
      password
    }

    userList.push(newUser)

    res.status(201).json(newUser)
  } else {
    res.status(405).json({ error: 'Método no permitido' })
  }
}

export default createUser
