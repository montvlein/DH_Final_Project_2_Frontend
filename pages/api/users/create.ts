// pages/api/users/create.js

import { type NextApiRequest, type NextApiResponse } from 'next'
import { userList } from '../../../api/data'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://qxyqyrodccqiwprcftia.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4eXF5cm9kY2NxaXdwcmNmdGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MzcxODIsImV4cCI6MjAxNTIxMzE4Mn0.9P40HeU1P161_t6ZZ2qiD3PHCLjX4UOa9KBSXhJM7Kw')

let nextUserId = 1

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, password } = req.body as {
        firstName: string
        lastName: string
        email: string
        password: string
      }
  
      if (firstName === '' || lastName === '' || email === '' || password === '') {
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

      const { data, error } = await supabase
      .from('User')
      .insert([
        { some_column: 'someValue', other_column: 'otherValue' },
      ])
      .select()
  
      if (error !== null ) throw new Error(error.message)
  
      res.status(201).json(data)

    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'error al guardar el usuario' })
    }

    
  } else {
    res.status(405).json({ error: 'Método no permitido' })
  }
}

export default createUser
