'use client'
import Logo from '@/components/signup/Logo'
import FormSignIn from '@/components/signin/FormSignIn'
import TituloSignIn from '@/components/signin/TituloSignIn'
import NoTienesCuenta from '@/components/signin/NoTienesCuenta'

const signIn: React.FC = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/users/read')

      if (response.status === 200) {
        const data = await response.json()
        console.log('Lista de usuarios', data)
      } else {
        console.error('Error al obtener la lista de usuarios')
      }
    } catch (error) {
      console.error('Error de red:', error)
    }
  }

  return (
    <div className='flex'>
      <Logo />
      <div className='bg-[#F8F7F3]   w-full'>
        <TituloSignIn />
        <FormSignIn />
        <NoTienesCuenta />
        <button onClick={fetchData} className='p-4 rounded bg-rose-300'>Consologear usuarios</button>
      </div>
    </div>
  )
}
export default signIn
