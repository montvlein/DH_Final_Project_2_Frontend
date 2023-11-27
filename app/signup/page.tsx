'use client'

import FormRegistro from '@/components/signup/FormRegistro'
import Logo from '@/components/signup/Logo'
import TituloRegistro from '@/components/signup/TituloRegistro'
import YaTienesCuenta from '@/components/signup/YaTienesCuenta'
import { useState } from 'react'
import Spinner from '@/components/Spinner'

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false)

  return (
    <><div className='flex h-screen relative'>
      { loading && <Spinner/> }
      <Logo />
      <div className='bg-[#F8F7F3]   w-full'>
        <TituloRegistro />
        <FormRegistro setLoading={setLoading} />
        <YaTienesCuenta />
      </div>
    </div>
    </>
  )
}
export default SignUp
