'use client'

import FormRegistro from "@/components/signup/FormRegistro"
import Spinner from "@/components/Spinner"
import Link from "next/link"
import { useSelector } from 'react-redux'
import { useState, useEffect } from "react"

export default function AdminUserSection() {
    const actions = {
        create: 'create',
        list: 'list'
    }
    const [loading, setLoading] = useState(false)
    const userInfo = useSelector( (state) => state.userInfo.activeUser)
    const [view, setView] = useState(actions.create)

    return(
        <>
            <div className="flex justify-evenly items-center">
                <p
                 onClick={(e) => setView(actions.create)}
                 className={`text-center font-semibold uppercase cursor-pointer ${view === actions.create ? 'border-b-2': ''}  hover:border-b-2 border-rose-500 max-w-[50%]`}>Crear usuario administrador</p>
                <p
                 onClick={(e) => setView(actions.list)}
                 className={`text-center font-semibold uppercase cursor-pointer ${view === actions.list ? 'border-b-2': ''}  hover:border-b-2 border-rose-500 max-w-[50%]`}>Listar usuarios</p>
                <Link
                 href={'/profile/' + userInfo.id}
                 className="text-center font-semibold uppercase cursor-pointer max-w-[50%] hover:border-b-2 border-rose-500"
                >Mi perfil</Link>
            </div>
            { loading && <Spinner/> }
            { view === actions.create && <FormRegistro setLoading={setLoading} isAdmin={true} />}
            { view === actions.list && <UserListTable />}
        </>
    )
}

import GetAllUsers from '@/services/GetAllUsers'

function UserListTable() {
    const [list, setList] = useState([])

    useEffect(()=>{
        const getlist = async () => {
            const userList = await GetAllUsers()
            setList(userList)
            return
        }
        getlist()
    }, [])

    return(
    <div class="relative overflow-x-auto rounded">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Role
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map( userData => (
                        <tr class="bg-white border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                { userData.id }
                            </th>
                            <td class="px-6 py-4">
                                { userData.firstName }
                            </td>
                            <td class="px-6 py-4">
                                { userData.mail }
                            </td>
                            <td class="px-6 py-4">
                                { userData.role }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    )
}