import type { Evento } from '@/models/Event'
import ModalEE from './ModalEE'
import type { AppDispatch } from '@/redux/store'
import { openModal } from '@/redux/features/modalEE-slice'
import { useDispatch } from 'react-redux'

interface CardProp {
  evento: Evento
}
const DetalleEntradas: React.FC = ({ evento }) => {
  console.log(evento)
  const dispatch = useDispatch<AppDispatch>()
  const submit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    dispatch(openModal())
  }

  const precioServicio = evento.ticketType.price * 0.1
  const precioTotal = evento.ticketType.price * 1.1
  return (
    <div className="flex flex-col  w-11/12">
      <div className="m-4 mb-10 z-10">
        <h2 className="text-white font-semibold text-2xl">Mis entradas</h2>
      </div>
      <div className="z-10 bg-white dark:bg-gray-700 dark:text-white">

        <div className=" bg-gray-300 p-3 text-2xl">{evento.event.name} | {evento.event.venue.venue} </div>
        <div className="z-10 h-40 lg:h-60 bg-gradient-to-r from-[#AEFFBB] to-[#00FFB2] my-2 flex items-center justify-center"><p className="font-montserrat text-2xl lg:text-4xl font-semibold leading-11 tracking-wide text-green-700">
          Pago aprobado        </p></div>

      </div>
      <div className='flex flex-col gap-10 lg:flex-row'>
        <div className='bg-[#D9D9D9] h-96 w-full lg:w-1/2 '>
          <div className='pl-4 pt-1 bg-[#F8F8F8]'><p className='font-montserrat text-2xl font-bold leading-29 tracking-normal text-left'>Resumen de compra</p>
            <p className='font-montserrat text-2xl font-normal leading-29 tracking-normal text-left text-gray-600'>{evento.event.name} | {evento.event.venue.venue}  </p>
          </div>
          <div>
            <p className='ml-4 mt-6 mb-2 text-xl'>Tipo de entrada</p>
            <div className='flex justify-between mx-4 pb-2 border-b border-solid border-[#975D93]'>
              <p>{evento.ticketType.name}</p>
              <p>$ {evento.ticketType.price}</p>
            </div>
            <p className='ml-4 mt-3 text-xl'>Servicios</p>
            <div className='flex justify-between mx-4 pb-2 border-b border-solid border-[#975D93]'>
              <p>Cargos por servicio</p> <p>$ {precioServicio}</p>
            </div>
            <p className='ml-4 mt-3 text-xl'>E-Ticket</p>
            <div className='flex justify-between mx-4 pb-2 border-b border-solid border-[#975D93]'>
              <p>Descarga electronica del ticket</p>
              <p>$ 0.00</p></div>
            <div className='flex justify-between mx-4 pb-2 mt-6'>
              <p className='font-montserrat text-base font-bold leading-6 tracking-normal text-left text-[#3D37F1]'>TOTAL</p>
              <p>$ {precioTotal}</p>
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
              <p>$ {precioTotal}</p>
            </div>
            <div className='flex justify-between mx-4 py-6 border-b border-solid border-[#975D93]'>
              <p className=' text-xl'>Tarjeta</p><p>XXXXXXXXXXXX4242</p>
            </div>
            <div className='flex justify-between mx-4 py-6 border-b border-solid border-[#975D93]'>
              <p className=' text-xl'>Estado</p>
              <p className='text-[#3D37F1] font-bold'>Pagado</p></div>
            <div className='flex justify-between mx-4 mt-4'>
              <p className=' text-xl'>Fecha</p><p>11/11/2023</p>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={submit} >
        <button type="submit" className="text-white font-poppins text-base font-medium mt-4 w-full  h-12 bg-gradient-to-b from-[#975D93] to-[#DCA6D8] transition duration-300 hover:to-[#975D93]">  Reenviar entrada </button></form>
      <ModalEE />
    </div >
  )
}

export default DetalleEntradas
