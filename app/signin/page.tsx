import FormSignIn from '@/components/signin/FormSignIn'
import TituloSignIn from '@/components/signin/TituloSignIn'
import YaTienesCuenta from '@/components/signin/YaTienesCuenta'
import Logo from '@/components/signup/Logo'

const registro: React.FC = () => {
  return (
    <><div className='flex'>
      <Logo />
      <div className='bg-[#F8F7F3]   w-full'>
        <TituloSignIn />
        <FormSignIn />
        <YaTienesCuenta />
      </div>
    </div>
    </>
  )
}
export default registro
