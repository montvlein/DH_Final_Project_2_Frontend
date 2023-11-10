// pages/api/users/create.js

import { NextApiRequest, NextApiResponse } from 'next';
import { userList } from '../../../api/data'

let nextUserId = 1;

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const newUser = {
      id: nextUserId++,
      firstName,
      lastName,
      email,
      password,
    };

    userList.push(newUser);

    res.status(201).json(newUser);
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
};
