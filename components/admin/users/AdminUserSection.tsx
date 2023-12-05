'use client'

import FormRegistro from '@/components/signup/FormRegistro'
import UserListTable from './AdminListUser'
import Spinner from '@/components/Spinner'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function AdminUserSection (): JSX.Element {
  const actions = {
    create: 'create',
    list: 'list'
  }
  const [loading, setLoading] = useState(false)
  const userInfo = useSelector((state: { userInfo: { activeUser: any } }) => state.userInfo.activeUser)
  const [view, setView] = useState(actions.create)

  return (
        <>
            <div className="flex justify-evenly items-end gap-3">
                <p
                  onClick={(e) => { setView(actions.create) }}
                  className={`text-center font-semibold uppercase cursor-pointer ${view === actions.create ? 'border-b-2' : ''}  hover:border-b-2 border-[#975D93] max-w-[30%]`}>Crear usuario administrador</p>
                <p
                  onClick={(e) => { setView(actions.list) }}
                  className={`text-center font-semibold uppercase cursor-pointer ${view === actions.list ? 'border-b-2' : ''}  hover:border-b-2 border-[#975D93] max-w-[50%]`}>Listar usuarios</p>
                <Link
                  href={'/profile/' + userInfo.id}
                  className="text-center font-semibold uppercase cursor-pointer max-w-[50%] hover:border-b-2 border-[#975D93]"
                >Mi perfil</Link>
            </div>
            { loading && <Spinner/> }
            { view === actions.create && <FormRegistro setLoading={setLoading} isAdmin={true} />}
            { view === actions.list && <UserListTable />}
        </>
  )
}
