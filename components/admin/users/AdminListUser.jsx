import GetAllUsers from '@/services/GetAllUsers'
import { useState, useEffect } from "react"

export default function UserListTable() {
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
    <div className="relative overflow-x-auto rounded">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Role
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map( userData => (
                        <tr key={userData.id} className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                { userData.id }
                            </th>
                            <td className="px-6 py-4">
                                { userData.firstName }
                            </td>
                            <td className="px-6 py-4">
                                { userData.mail }
                            </td>
                            <td className="px-6 py-4">
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