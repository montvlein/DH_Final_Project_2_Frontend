'use client'

import { useEffect, useState } from "react"

const AdminPage = () => {
    const titles = {
        viewUser:'usuarios',
        viewEvent: 'eventos',
        viewReport: 'reportes'
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
            { viewUser && <AdminSectionWraper title={"administrar usuarios"}> <AdminUserSection /> </AdminSectionWraper> }
            { viewEvent && <AdminSectionWraper title={"administrar eventos"}> <AdminEventSection /> </AdminSectionWraper> }
            { viewReport && <AdminSectionWraper title={"reportes"}> <AdminReportSection /> </AdminSectionWraper> }
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

function AdminSectionWraper({ title, children }) {
    return(
        <>
        <h2 className="uppercase text-white text-2xl lg:text-7xl font-bold">{title}</h2>
        <div className="flex flex-col gap-16 m-4 p-16 bg-white rounded-lg shadow-lg relative">
            { children }
        </div>
        </>
    )
}

import FormRegistro from "@/components/signup/FormRegistro"
import Spinner from "@/components/Spinner"
import Link from "next/link"
import { useSelector } from 'react-redux'

function AdminUserSection() {
    const [loading, setLoading] = useState(false)
    const userInfo = useSelector( (state) => state.userInfo.activeUser)

    return(
        <>
            <div className="flex justify-evenly items-center">
                <p className="text-center uppercase cursor-pointer border-b-2 border-rose-500 max-w-[50%]">Crear usuario administrador</p>
                <p className="text-center uppercase cursor-pointer max-w-[50%] hover:border-b-2 border-rose-500">Listar usuarios</p>
                <Link
                 href={'/profile/' + userInfo.id}
                 className="text-center uppercase cursor-pointer max-w-[50%] hover:border-b-2 border-rose-500"
                >Mi perfil</Link>
            </div>
            { loading && <Spinner/> }
            <FormRegistro setLoading={setLoading} isAdmin={true} />
        </>
    )
}

function AdminEventSection() {
    return(
        <>
        </>
    )
}

import LinesChart from '@/components/admin/LineChart'
import BarsChart from '@/components/admin/BarChart'
import PiesChart from '@/components/admin/PieChart'

function AdminReportSection() {
    return(
        <>
        <div className="flex flex-col gap-16">
            <PiesChart/>
            <LinesChart/>
            <BarsChart/>
        </div>
        </>
    )
}
