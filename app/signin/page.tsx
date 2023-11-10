'use client'
import Logo from '@/components/signup/Logo'
import FormSignIn from '@/components/signin/FormSignIn'
import TituloSignIn from '@/components/signin/TituloSignIn'
import NoTienesCuenta from '@/components/signin/NoTienesCuenta'

const signIn: React.FC = () => {
  return (
    <div className='flex'>
      <Logo />
      <div className='bg-[#F8F7F3]   w-full'>
        <TituloSignIn />
        <FormSignIn />
        <NoTienesCuenta />
      </div>
    </div>
  )
}
export default signIn
