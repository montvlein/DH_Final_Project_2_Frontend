import Image from 'next/image'

export default function NavBarAdmin({active, setActive, titles}) {

    const handleChangeView = (title) => {
        setActive(title)
    }

    return(
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
                 onClick={(e) => { handleChangeView(titles.viewReport)}}
                 className={`
                 cursor-pointer uppercase font-semibold transition-all duration-300 w-fit
                 hover:text-rose-500 hover:scale-150 hover:translate-x-14
                 ${ active === titles.viewReport ? 'text-white scale-150 translate-x-14':'' }
                 `}>{titles.viewReport}</li>
                <li
                 onClick={(e) => { handleChangeView(titles.viewUser)}}
                 className={`
                 cursor-pointer uppercase font-semibold transition-all duration-300 w-fit
                 hover:text-rose-500 hover:scale-150 hover:translate-x-14
                 ${ active === titles.viewUser ? 'text-white scale-150 translate-x-14':'' }
                 `}>{titles.viewUser}</li>
                <li
                 onClick={(e) => { handleChangeView(titles.viewEvent)}}
                 className={`
                 cursor-pointer uppercase font-semibold transition-all duration-300 w-fit
                 hover:text-rose-500 hover:scale-150 hover:translate-x-14
                 ${ active === titles.viewEvent ? 'text-white scale-150 translate-x-14':'' }
                 `}>{titles.viewEvent}</li>
            </ul>
        </aside>
    )
}