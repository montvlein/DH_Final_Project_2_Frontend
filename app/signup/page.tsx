import FormRegistro from '@/components/registro/FormRegistro'
import Logo from '@/components/registro/Logo'
import TituloRegistro from '@/components/registro/TituloRegistro'
import YaTienesCuenta from '@/components/registro/YaTienesCuenta'

const registro: React.FC = () => {
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
export default registro
