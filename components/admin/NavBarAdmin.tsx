import Image from 'next/image'
import React from 'react'

interface NavBarAdminProps {
  active: string
  setActive: (title: any) => void
  titles: any
}

const NavBarAdmin: React.FC<NavBarAdminProps> = ({ active, setActive, titles }) => {
  const handleChangeView = (title: any): void => {
    setActive(title)
  }

  return (
        <aside className="h-fit lg:h-full lg:col-start-2 lg:col-span-1 p-8 bg-gray-900 text-slate-300 admin-font tracking-widest">
            <figure className="flex flex-col items-center justify-center">
                <Image
                src='/Logo (6) 2.svg'
                alt='logo'
                width={100}
                height={50}
                className='object-contain m-4'
                />
                <figcaption>Admin panel</figcaption>
            </figure>
            <hr className="bg-slate-300 my-4" />
            <ul className="flex flex-col gap-8">
                <li
                onClick={(e) => { handleChangeView(titles.viewReport) }}
                className={`
                cursor-pointer uppercase font-semibold transition-all duration-300 w-fit flex gap-4 items-center
                hover:text-[#975D93] hover:scale-100 hover:translate-x-14
                ${active === titles.viewReport ? 'text-white scale-100 translate-x-14' : ''}
                `}>
                    <Image
                      src='/dashboard_ico.svg'
                      alt=""
                      width={24}
                      height={24}
                    />
                    {titles.viewReport}</li>
                <li
                onClick={(e) => { handleChangeView(titles.viewUser) }}
                className={`
                cursor-pointer uppercase font-semibold transition-all duration-300 w-fit flex gap-4 items-center
                hover:text-[#975D93] hover:scale-100 hover:translate-x-14
                ${active === titles.viewUser ? 'text-white scale-100 translate-x-14' : ''}
                `}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    {titles.viewUser}</li>
                <li
                onClick={(e) => { handleChangeView(titles.viewEvent) }}
                className={`
                cursor-pointer uppercase font-semibold transition-all duration-300 w-fit flex gap-4 items-center
                hover:text-[#975D93] hover:scale-100 hover:translate-x-14
                ${active === titles.viewEvent ? 'text-white scale-100 translate-x-14' : ''}
                `}>
                    <Image
                      src='/ticket-ico.svg'
                      alt=""
                      width={24}
                      height={24}
                      className='w-4 h-4'/>
                    {titles.viewEvent}</li>
            </ul>
        </aside>
  )
}

export default NavBarAdmin
