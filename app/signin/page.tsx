'use client'
import FormSignIn from '@/components/signin/FormSignIn'
import TituloSignIn from '@/components/signin/TituloSignIn'
import NoTienesCuenta from '@/components/signin/NoTienesCuenta'
import Logo from '@/components/signin/LogoSi'
import { useState } from 'react'
import Spinner from '@/components/Spinner'

const signIn: React.FC = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div className='flex h-screen relative'>
      { loading && <Spinner/> }
      <Logo />
      <div className='bg-[#F8F7F3]  w-full '>
        <TituloSignIn />
        <FormSignIn setLoading={setLoading} />
        <NoTienesCuenta />
      </div>
    </div>
  )
}
export default signIn
