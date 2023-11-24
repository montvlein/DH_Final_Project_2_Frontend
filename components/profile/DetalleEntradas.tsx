/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
'use client'

import ModalEE from './ModalEE'
import type { AppDispatch } from '@/redux/store'
import { openModal } from '@/redux/features/modalEE-slice'
import { useDispatch } from 'react-redux'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { type Ticket } from '@/models/Ticket'

const DetalleEntradas: React.FC = () => {
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
  const [date, setDate] = useState('')
  const [price, setPrice] = useState(0)
  const [recargo, setRecargo] = useState(2700)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const getTickets = (): void => {
      const apiTicketUrl = 'http://ec2-3-208-12-227.compute-1.amazonaws.com:8080/event/ticket/' + ticketId
      fetch(apiTicketUrl)
        .then(async res => await res.json())
        .then(data => {
          setTicket(data)
          const year = data.dateTime.dateTime[0]
          const month = data.dateTime.dateTime[1]
          const day = data.dateTime.dateTime[2]
          setDate(`${day}/${month}/${year}`)
          setPrice(data.ticketType.price)
          setTotal(data.ticketType.price + recargo)
        })
        .catch(err => { console.error(err.message) })
    }
    getTickets()
  }, [ticketId])

  const dispatch = useDispatch<AppDispatch>()
  const submit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()// Evitar que el formulario se envíe
    dispatch(openModal())
  }
  return (
    <div className="flex flex-col  w-11/12">
      <div className="m-4 mb-10 z-10">
        <h2 className="text-white font-semibold text-2xl">Mis entradas</h2>
      </div>
      <div className="z-10 bg-white dark:bg-gray-700 dark:text-white">

        <div className=" bg-gray-300 p-3 text-2xl">{ticket.event.name} | {ticket.event.venue.venue}  </div>
        <div className="z-10 h-40 lg:h-60 bg-gradient-to-r from-[#AEFFBB] to-[#00FFB2] my-2 flex items-center justify-center">
          <p className="font-montserrat text-2xl lg:text-4xl font-semibold leading-11 tracking-wide text-green-700">Pago aprobado</p>
        </div>

      </div>
      <div className='flex flex-col gap-10 lg:flex-row'>
        <div className='bg-[#D9D9D9] h-96 w-full lg:w-1/2 '>
          <div className='pl-4 pt-1 bg-[#F8F8F8]'><p className='font-montserrat text-2xl font-bold leading-29 tracking-normal text-left'>Resumen de compra</p>
            <p className='font-montserrat text-2xl font-normal leading-29 tracking-normal text-left text-gray-600'>{ticket.event.name} | {ticket.event.venue.venue}  </p>
          </div>
          <div className='p-4 h-fit'>
            <p className='ml-4 text-xl'>Tipo de entrada</p>
            <div className='flex justify-between mx-4 pb-2 border-b border-solid border-[#975D93]'>
              <p>1 X {ticket.ticketType.name } Sin asiento</p>
              <p>{ price.toLocaleString('es-Ar', {
                style: 'currency',
                currency: 'ARS'
              }) }</p>
            </div>
            <p className='ml-4 mt-3 text-xl'>Servicios</p>
            <div className='flex justify-between mx-4 pb-2 border-b border-solid border-[#975D93]'>
              <p>Cargos por servicio</p> <p>{ recargo.toLocaleString('es-Ar', {
                style: 'currency',
                currency: 'ARS'
              }) }</p>
            </div>
            <p className='ml-4 mt-3 text-xl'>E-Ticket</p>
            <div className='flex justify-between mx-4 pb-2 border-b border-solid border-[#975D93]'>
              <p>Descarga electronica del ticket</p>
              <p>$ 0.00</p></div>
            <div className='flex justify-between mx-4 pb-2 mt-6'>
              <p className='font-montserrat text-base font-bold leading-6 tracking-normal text-left text-[#3D37F1]'>TOTAL</p>
              <p>{ total.toLocaleString('es-Ar', {
                style: 'currency',
                currency: 'ARS'
              }) }</p>
            </div>
          </div>
        </div>
        <div className='bg-[#D9D9D9] h-96 w-full lg:w-1/2'>
          <div className='pl-3 pt-1 bg-[#F8F8F8]'><p className='font-montserrat text-2xl font-bold leading-29 tracking-normal text-left'>Detalle de pago</p>
            <p className='font-montserrat text-2xl font-normal leading-29 tracking-normal text-left text-gray-600'> Medio de pago: Visa</p>
          </div>
          <div>
            <div className='flex justify-between mx-4 mt-14 pb-2 border-b border-solid border-[#975D93]'>
              <p className=' text-xl'>Monto</p>
              <p>{ total.toLocaleString('es-Ar', {
                style: 'currency',
                currency: 'ARS'
              }) }</p>
            </div>
            <div className='flex justify-between mx-4 py-6 border-b border-solid border-[#975D93]'>
              <p className=' text-xl'>Tarjeta</p><p>XXXXXXXXXXXX4905</p>
            </div>
            <div className='flex justify-between mx-4 py-6 border-b border-solid border-[#975D93]'>
              <p className=' text-xl'>Estado</p>
              <p className='text-[#3D37F1] font-bold'>Pagado</p></div>
            <div className='flex justify-between mx-4 mt-4'>
              <p className=' text-xl'>Fecha</p><p>{ date }</p>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={submit} className='hidden' >
        <button type="submit" className="text-white font-poppins text-base font-medium mt-4 w-full  h-12 bg-gradient-to-b from-[#975D93] to-[#DCA6D8] transition duration-300 hover:to-[#975D93]">  Reenviar entrada </button></form>
      <ModalEE />
    </div >
  )
}
export default DetalleEntradas
