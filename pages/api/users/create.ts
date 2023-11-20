// pages/api/users/create.js

import { type NextApiRequest, type NextApiResponse } from 'next'
import { userList } from '../../../api/data'

let nextUserId = 1

const createUser = (req: NextApiRequest, res: NextApiResponse): any => {
  if (req.method === 'POST') {
    const { firstName, lastName, mail, password } = req.body as {
      firstName: string
      lastName: string
      mail: string
      password: string
    }

    if (firstName === '' || lastName === '' || mail === '' || password === '') {
      res.status(400).json({ error: 'Faltan campos obligatorios' }); return
    }

    const newUser = {
      id: nextUserId++,
      firstName,
      lastName,
      mail,
      password
    }

    userList.push(newUser)

    res.status(201).json(newUser)
  } else {
    res.status(405).json({ error: 'Método no permitido' })
  }
}

export default createUser
