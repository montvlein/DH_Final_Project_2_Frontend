'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { type Ticket } from '@/models/Ticket'

const DeliveryInfo: React.FC = () => {
  const param = useParams()
  const ticketId = param?.id ?? 0
  const [ticket, setTicket] = useState<Ticket>({
    id: 0,
    dateTime: {
      id: 0,
      dateTime: [
        2024,
        3,
        2,
        20,
        0
      ],
      capacity: null
    },
    ticketType: {
      id: 0,
      name: 'General',
      stock: 0,
      price: 0,
      urlImage: ''
    },
    event: {
      id: 3,
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
    },
    idUser: 0
  })
  const [price, setPrice] = useState(0)
  const [recargo, setRecargo] = useState(2700)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const getTickets = (): void => {
      const apiTicketUrl = 'https://api.goldenticket.ar/event/ticket/' + ticketId
      fetch(apiTicketUrl)
        .then(async res => await res.json())
        .then(data => {
          setTicket(data)
          setPrice(data.ticketType.price)
          setTotal(data.ticketType.price + recargo)
          console.log(data)
        })
        .catch(err => { console.error(err.message) })
    }
    getTickets()
  }, [ticketId])
  return (
    <>
      <h3 className='font-montserrat text-18 font-bold m-5'>Modo en que recibes tus tickets</h3>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <div className='bg-[#D9D9D9] w-full p-4 md:mx-4 '>
          <p className='text-black font-montserrat text-base font-medium'>E-Ticket</p>
          <p className='text-black font-montserrat text-base font-medium'>Costo $0.00</p>
        </div>
        <div className='bg-[#D9D9D9] p-4 md:mr-4'>
          <p className='text-black font-montserrat text-base font-medium'>Al finalizar, el ticket estará disponible en tu historial de compra, para que lo imprimas o lo presentes, desde tu dispositivo móvil, al ingresar al recinto.</p>
        </div>
      </div>
      <div className=" bg-[#F8F8F8] p-5 mt-4 text-black font-montserrat text-base font-bold">{ticket.event.name}  | {ticket.event.venue.venue} </div>
      <div className='bg-[#D9D9D9] flex flex-col p-4 md:justify-between md:mx-4'>
        <div>
          <h4 className='text-black font-montserrat text-base font-bold'>UBICACIONES</h4>
          <div className='flex justify-between'>
            <p className='md:pr-40'>{ticket.ticketType.name}</p>
            <p>{price.toLocaleString('es-Ar', {
              style: 'currency',
              currency: 'ARS'
            })}</p>
          </div>
          <div className='flex justify-between'>
            <p>Cargos por servicio</p>
            <p>$ 2,700.00</p>
          </div>
        </div>
        <div>
          <h4 className='text-black font-montserrat text-base font-bold'>ENTREGA</h4>
          <div className='flex justify-between'>
            <p className='md:pr-40'>E-Ticket</p>
            <p>$ 0.00</p>
          </div>
        </div>
        <div>
          <h4 className='text-black font-montserrat text-base font-bold'>A PAGAR</h4>
          <div className='flex justify-between'>
            <p className='md:pr-40'>TICKET + COSTO POR SERVICIO</p>
            <p>{total.toLocaleString('es-Ar', {
              style: 'currency',
              currency: 'ARS'
            })}</p>
          </div>
          <div className='flex justify-between'>
            <p>E-Ticket</p>
            <p>$ 0.00</p>
          </div>
          <div className='flex justify-between pt-10'>
            <p className='text-[#3D37F1] font-bold'>TOTAL</p>
            <p>{total.toLocaleString('es-Ar', {
              style: 'currency',
              currency: 'ARS'
            })}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeliveryInfo
