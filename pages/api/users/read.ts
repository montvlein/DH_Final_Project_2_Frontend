// pages/api/users/read.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { userList } from '../../../api/data'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // ... Resto del código para responder con la lista de usuarios desde el array users
    return res.status(200).json(userList);
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
};
