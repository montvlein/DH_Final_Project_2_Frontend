/* eslint-disable @typescript-eslint/restrict-plus-operands */
'use client'

import CardsProfile from '@/components/profile/CardsProfile'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import GetTickets from '../../services/GetTikets'

const MisEntradas: React.FC = () => {
  const param = useParams()
  const userId = param?.id ?? 0
  const [loading, setLoading] = useState(true)
  const [eventList, setEventList] = useState<any[]>([])

  const getUserTickets = (id: any): void => {
    void GetTickets()
      .then((eList: any[]) => {
        const userTicketsList = eList.filter(t => parseInt(t.idUser) === parseInt(id))
        setEventList(userTicketsList)
        setLoading(false)
      })
  }

  useEffect(() => {
    getUserTickets(userId)
  }, [userId])

  return (
    <section className="flex flex-col z-10 w-11/12">
      <div className="m-4 mb-10">
        <h2 className="text-white font-semibold text-2xl">Mis entradas</h2>
      </div>
      <div className="shadow-lg bg-white dark:bg-gray-700 dark:text-white">
        <div className="flex gap-2 justify-around">
          <Link href={'/profile/' + userId}><button className="grow py-4 uppercase font-semibold lg:text-2xl text-xs ">Información personal</button></Link>
          <Link href={'password/'}><button className="grow py-4 uppercase font-semibold lg:text-2xl text-xs ">Cambiar contraseña</button></Link>
          <button className=" py-4 uppercase font-semibold lg:text-2xl text-xs  text-[#975D93] border-2 border-transparent border-b-[#DCA6D8] ">Mis entradas</button>
        </div>
        <div className="p-8 flex flex-col gap-4">
          { loading ?
            <div className='h-[50vh]'>
              <Skeleton />
            </div>   : eventList.map((ticket, index) => (
            <CardsProfile key={index} ticket={ticket} />
            ))
          }
        </div>
      </div>
    </section>

  )
}
export default MisEntradas

const Skeleton: React.FC = () => {
  return(
    <article className='animate-pulse rounded-2xl bg-slate-900 overflow-hidden shadow-xl  md:mx-24 my-2'>
        <div className='bg-slate-600 w-full h-48'></div>
        <div className='p-4 flex gap-6 bg-gray-100 dark:bg-gray-700'>
          <p className='flex flex-col items-center font-bold'>
            <span className='text-blue-500 bg-slate-600 w-8 h-8 rounded'></span>
            <span className='text-3xl bg-slate-600 w-8 h-8 rounded'></span>
          </p>
          <div className='text-base w-full'>
            <h4 className='mb-2 bg-slate-600 h-8 w-24 rounded'></h4>
            <p className='text-sm font-normal h-24 rounded w-full bg-slate-600 text-gray-600 dark:text-gray-100'>
            </p>
          </div>
        </div>
    </article>
  )
}
