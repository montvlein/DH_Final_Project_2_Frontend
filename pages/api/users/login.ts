import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  if (req.method === 'POST') {
    const { email, password } = req.body as { email: string; password: string }
    // Verificar las credenciales del usuario en tu sistema
    if (email === 'usuario@example.com' && password === 'contraseña') {
      // Las credenciales son válidas, puedes generar un token de autenticación aquí
      const token = 'token_de_autenticacion'

      // Devolver el token en la respuesta
      res.status(200).json({ token })
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' })
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' })
  }
}
