'use client'

import { useEffect, useState } from 'react'
import NavBarAdmin from '@/components/admin/NavBarAdmin'
import AdminUserSection from '@/components/admin/users/AdminUserSection'
import AdminEventSection from '@/components/admin/events/AdminEventSection'
import AdminReportSection from '@/components/admin/report/AdminReportSection'

const AdminPage: React.FC = () => {
  const titles = {
    viewUser: 'usuarios',
    viewEvent: 'eventos',
    viewReport: 'Dashboard'
  }

  const [viewUser, setViewUser] = useState(false)
  const [viewEvent, setViewEvent] = useState(false)
  const [viewReport, setViewReport] = useState(true)
  const [active, setActive] = useState(titles.viewReport)

  const hiddeSections = (): void => {
    setViewUser(false)
    setViewEvent(false)
    setViewReport(false)
  }

  useEffect(() => {
    hiddeSections()
    if (active === titles.viewUser) setViewUser(true)
    if (active === titles.viewEvent) setViewEvent(true)
    if (active === titles.viewReport) setViewReport(true)
  }, [active])

  return (<>
      <div className="absolute top-0 w-full bg-gradient-to-r from-[#DCA6D8] to-[#975D93] h-80"></div>
      <div className="relative lg:grid lg:grid-cols-6 h-full">
        <NavBarAdmin active={active} setActive={setActive} titles={titles} />
        <section className="lg:col-span-3 p-8 bg-slate-200">
            { viewUser && <AdminSectionWraper title={'administrar usuarios'}> <AdminUserSection /> </AdminSectionWraper> }
            { viewEvent && <AdminSectionWraper title={'administrar eventos'}> <AdminEventSection /> </AdminSectionWraper> }
            { viewReport && <AdminSectionWraper title={'reportes'}> <AdminReportSection /> </AdminSectionWraper> }
        </section>
      </div >
      </>
  )
}

export default AdminPage

interface AdminSectionWrapperProps {
  title: string
  children: React.ReactNode
}

function AdminSectionWraper ({ title, children }: AdminSectionWrapperProps): JSX.Element {
  return (
        <>
        <h2 className="uppercase text-slate-700 text-2xl lg:text-7xl font-bold">{title}</h2>
        <div className="flex flex-col gap-16 m-4 p-16 bg-white rounded-lg shadow-lg relative">
            { children }
        </div>
        </>
  )
}
