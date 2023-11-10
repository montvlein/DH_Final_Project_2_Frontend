import FormRegistro from '@/components/signup/FormRegistro'
import Logo from '@/components/signup/Logo'
import TituloRegistro from '@/components/signup/TituloRegistro'
import YaTienesCuenta from '@/components/signup/YaTienesCuenta'

const signUp: React.FC = () => {
  return (
    <><div className='flex'>
      <Logo />
      <div className='bg-[#F8F7F3]   w-full'>
        <TituloRegistro />
        <FormRegistro />
        <YaTienesCuenta />
      </div>
    </div>
    </>
  )
}
export default signUp
