import Link from 'next/link'
import Image from 'next/image'
import { CiMenuFries } from 'react-icons/ci'

const Header: React.FC = () => {
  return (
    <div className='w-full sticky top-0 z-50'>
      <nav className='mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-black shadow-md'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/Logo (6) 2.svg'
            alt='logo'
            width={100}
            height={50}
            className='object-contain'
          />
        </Link>
        <CiMenuFries size= '2rem'color="white" className="md:hidden"/>
        <div className= "hidden md:block">
          <div className="flex items-center space-x-4">
            <Link href='/signin' className= "text-white font-montserrat text-base font-normal rounded-full bg-slate-700 p-2 px-4 border-2 border-transparent hover:border-pink-500 hover:bg-transparent">Inicia Sesión</Link>
            <Link href='/signup' className= "text-white font-montserrat text-base font-normal border-2 border-slate-100 rounded-full p-2 px-4 hover:border-pink-500 ">Registrate</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
