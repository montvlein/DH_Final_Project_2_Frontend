'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CiMenuFries } from 'react-icons/ci'
import { userUseSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/redux/store'
import { logOut } from '@/redux/features/auth-slice'
import { clearUser } from '@/redux/features/activeUser-slice'

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const userString = typeof window !== 'undefined' ? window.sessionStorage.getItem('user') : null
  const userInfo = userString !== null ? JSON.parse(userString) : userUseSelector((state) => state.userInfo.activeUser)

  const handleLogout = (): any => {
    dispatch(clearUser())
    dispatch(logOut())
    window.location.href = '/'
  }

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
        {
          userInfo.email !== ''
            ? <div className='flex gap-4'>
              <span>{userInfo.email}</span>
              <button
               className='text-rose-500'
               onClick={handleLogout}
              >cerrar sesión</button>
            </div>
            : <div className= "hidden md:block">
            <div className="flex items-center space-x-4">
              <Link href='/signin' className= "text-white font-montserrat text-base font-normal rounded-full bg-slate-700 p-2 px-4 border-2 border-transparent hover:border-pink-500 hover:bg-transparent">Inicia Sesión</Link>
              <Link href='/signup' className= "text-white font-montserrat text-base font-normal border-2 border-slate-100 rounded-full p-2 px-4 hover:border-pink-500 ">Registrate</Link>
            </div>
          </div>
        }
      </nav>
    </div>
  )
}

export default Header
