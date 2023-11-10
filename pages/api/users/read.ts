// pages/api/users/read.ts

import { type NextApiRequest, type NextApiResponse } from 'next'
import { userList } from '../../../api/data'

const getAllUser = (req: NextApiRequest, res: NextApiResponse): any => {
  if (req.method === 'GET') {
    res.status(200).json(userList)
  } else {
    res.status(405).json({ error: 'Método no permitido' })
  }
}

export default getAllUser
