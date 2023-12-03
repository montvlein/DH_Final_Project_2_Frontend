import type { Evento } from '@/models/Event'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const PurchaseSummary: React.FC = () => {
  const param = useParams()
  const ticketId = param?.id ?? 0
  const [ticket, setTicket] = useState<Evento>({
    id: 0,
    dateList: [
      {
        id: 0,
        dateTime: [0, 0, 0, 0, 0],
        ticketTypeList: [
          {
            id: 0,
            name: '',
            stock: 0,
            urlImage: '',
            price: 0,
          },
        ],
        capacity: 0,
      },
    ],
    description: '',
    description_title: '',
    name: '',
    venue: {
      id: 0,
      venue: '',
      country: '',
      city: '',
      address: ''
    },
    miniImageUrl: '',
    bannerImageUrl: '',
    detailImageUrl: '',
    category: {
      id: 0,
      description: '',
      urlImage: ''
    }
  })
  const [price, setPrice] = useState(0)
  const [recargo, setRecargo] = useState(2700)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const getTickets = (): void => {
      const apiTicketUrl = 'https://api.goldenticket.ar/event/' + ticketId
      fetch(apiTicketUrl)
        .then(async res => await res.json())
        .then(data => {
          setTicket(data)
          console.log(data)
          setPrice(data.dateList[0].ticketTypeList[0].price)
          setTotal(data.dateList[0].ticketTypeList[0].price + recargo)
          console.log(data)
        })
        .catch(err => { console.error(err.message) })
    }
    getTickets()
  }, [ticketId])
  return (
    <div className='flex flex-col w-full mb-10 md:m-10 md:w-1/2'>
      <div className='bg-[#D9D9D9] h-96'>
        <div className='flex justify-between pl-4 pt-1 bg-[#F8F8F8]'>
          <p className='font-montserrat text-2xl font-bold leading-29 tracking-normal text-left'>Resumen de compra</p>
          <Link href={'/'}>Cancelar compra</Link>
        </div>
        <div>
          <p className='ml-4 mt-6 mb-2 text-xl'>Tipo de entrada</p>
          <div className='flex justify-between mx-4 pb-2 border-b border-solid border-[#975D93]'>
            <p>{ticket.dateList[0].ticketTypeList[0].name}</p>
            <p>{price.toLocaleString('es-Ar', {
              style: 'currency',
              currency: 'ARS'
            })}</p>
          </div>
          <p className='ml-4 mt-3 text-xl'>Servicios</p>
          <div className='flex justify-between mx-4 pb-2 border-b border-solid border-[#975D93]'>
            <p>Cargos por servicio</p> <p>$ 2,700.00</p>
          </div>
          <p className='ml-4 mt-3 text-xl'>E-Ticket</p>
          <div className='flex justify-between mx-4 pb-2 border-b border-solid border-[#975D93]'>
            <p>Descarga electronica del ticket</p>
            <p>$ 0.00</p></div>
          <div className='flex justify-between mx-4 pb-2 mt-6'>
            <p className='font-montserrat text-base font-bold leading-6 tracking-normal text-left text-[#3D37F1]'>TOTAL</p>
            <p>{total.toLocaleString('es-Ar', {
              style: 'currency',
              currency: 'ARS'
            })}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseSummary
