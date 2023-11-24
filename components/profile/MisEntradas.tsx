'use client'

import CardsProfile from '@/components/profile/CardsProfile'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import GetTickets from '../../services/GetTikets'

const MisEntradas: React.FC = () => {
  const param = useParams()
  const userId = param?.id || 0
  const [eventList, setEventList] = useState<any[]>([])

  const getUserTickets = (id:any) => {
    GetTickets()
    .then( (eList: any[]) => {
      const userTicketsList = eList.filter( t => t.idUser == id)
      setEventList(userTicketsList)
    })
  }

  useEffect(()=>{
    getUserTickets(userId)
  }, [userId])

  return (
    <section className="flex flex-col z-10 w-11/12">
      <div className="m-4 mb-10">
        <h2 className="text-white font-semibold text-2xl">Mis entradas</h2>
      </div>
      <div className="shadow-lg bg-white dark:bg-gray-700 dark:text-white">
        <div className="flex gap-2 justify-around">
          <Link href={'/profile/'+userId}><button className="grow py-4 uppercase font-semibold lg:text-2xl text-xs ">Información personal</button></Link>
          <Link href={'/newpassword/'+userId}><button className="grow py-4 uppercase font-semibold lg:text-2xl text-xs ">Cambiar contraseña</button></Link>
          <button className=" py-4 uppercase font-semibold lg:text-2xl text-xs  text-[#975D93] border-2 border-transparent border-b-[#DCA6D8] ">Mis entradas</button>
        </div>
        <div className="p-8 flex flex-col gap-4">
          {eventList.map((ticket, index) => (
            <CardsProfile key={index} ticket={ticket} />
          ))}
        </div>
      </div>
    </section>

  )
}
export default MisEntradas
