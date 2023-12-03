'use client'

import { useEffect, useState } from "react"

const AdminPage = () => {
    const titles = {
        viewUser:'usuarios',
        viewEvent: 'eventos',
        viewReport: 'estadisticas'
    }

    const [viewUser, setViewUser] = useState(false)
    const [viewEvent, setViewEvent] = useState(false)
    const [viewReport, setViewReport] = useState(true)
    const [active, setActive] = useState(titles.viewReport)

    const hiddeSections = () => {
        setViewUser(false)
        setViewEvent(false)
        setViewReport(false)
    }

    useEffect(()=>{
        hiddeSections()
        if ( active === titles.viewUser ) setViewUser(true)
        if ( active === titles.viewEvent ) setViewEvent(true)
        if ( active === titles.viewReport ) setViewReport(true)
    },[active])


    return (<>
      <div className="absolute top-0 w-full bg-gradient-to-r from-[#DCA6D8] to-[#975D93] h-80"></div>
      <div className="relative lg:grid lg:grid-cols-6 h-full">
        <NavBarAdmin active={active} setActive={setActive} titles={titles} />
        <section className="lg:col-span-3 p-8">
            { viewUser && <AdminUserSection /> }
            { viewEvent && <AdminEventSection /> }
            { viewReport && <AdminReportSection /> }
        </section>
      </div >
      </>
    )
}

export default AdminPage

function NavBarAdmin({active, setActive, titles}) {

    const handleChangeView = (title) => {
        setActive(title)
    }

    return(
        <aside className="h-fit lg:h-full lg:col-start-2 lg:col-span-1 p-8">
            <ul className="flex flex-col gap-8">
                <li
                 onClick={(e) => { handleChangeView(titles.viewUser)}}
                 className={`
                 cursor-pointer uppercase font-semibold transition-all duration-300 w-fit
                 hover:text-white hover:scale-150 hover:translate-x-14
                 ${ active === titles.viewUser ? 'text-white scale-150 translate-x-14':'' }
                 `}>{titles.viewUser}</li>
                <li
                 onClick={(e) => { handleChangeView(titles.viewEvent)}}
                 className={`
                 cursor-pointer uppercase font-semibold transition-all duration-300 w-fit
                 hover:text-white hover:scale-150 hover:translate-x-14
                 ${ active === titles.viewEvent ? 'text-white scale-150 translate-x-14':'' }
                 `}>{titles.viewEvent}</li>
                <li
                 onClick={(e) => { handleChangeView(titles.viewReport)}}
                 className={`
                 cursor-pointer uppercase font-semibold transition-all duration-300 w-fit
                 hover:text-white hover:scale-150 hover:translate-x-14
                 ${ active === titles.viewReport ? 'text-white scale-150 translate-x-14':'' }
                 `}>{titles.viewReport}</li>
            </ul>
        </aside>
    )
}

function AdminUserSection() {
    return(
        <>
        <h2>Administrar Usuarios</h2>
        <div>
            <article>data</article>
        </div>
        </>
    )
}

function AdminEventSection() {
    return(
        <>
        <h2>Administrar Eventos</h2>
        <div>
            <article>data</article>
        </div>
        </>
    )
}

function AdminReportSection() {
    return(
        <>
        <h2>Reportes</h2>
        <div>
            <article>data</article>
        </div>
        </>
    )
}