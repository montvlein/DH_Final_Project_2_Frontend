import Link from 'next/link'
import Image from 'next/image'
import { CiMenuFries } from 'react-icons/ci'

const Header: React.FC = () => {
  return (
    <div className='w-full sticky top-0 z-50'>
      <nav className='h-118 mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-black shadow-md'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/Logo (6) 2.svg'
            alt='logo'
            width={295}
            height={92}
            className='object-contain'
          />
        </Link>
        <CiMenuFries size='2rem' color="white" className="md:hidden" />
        <div className="hidden md:block">
          <div className="flex space-x-4">
            <Link href='/' className="text-white font-montserrat text-base font-normal">Inicio</Link>
            <Link href='/' className="text-white font-montserrat text-base font-normal">Soporte</Link>
            <Link href='/signin' className="text-white font-montserrat text-base font-normal">Inicia Sesión</Link>
            <Link href='/signup' className="text-white font-montserrat text-base font-normal">Registrate</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
