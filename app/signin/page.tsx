'use client'
import FormSignIn from '@/components/signin/FormSignIn'
import TituloSignIn from '@/components/signin/TituloSignIn'
import NoTienesCuenta from '@/components/signin/NoTienesCuenta'
import Logo from '@/components/signin/LogoSi'

const signIn: React.FC = () => {
  return (
    <div className='flex h-screen'>
      <Logo />
      <div className='bg-[#F8F7F3]  w-full '>
        <TituloSignIn />
        <FormSignIn />
        <NoTienesCuenta />
      </div>
    </div>
  )
}
export default signIn
