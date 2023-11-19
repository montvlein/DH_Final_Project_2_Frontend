import { eventList } from '../../api/data'
import type { Evento } from '@/models/Event'

interface CardProp {
  evento: Evento
}
const DetalleEntradas: React.FC<CardProp> = () => {
  console.log(eventList)

  return (
    <div className="flex flex-col z-10 w-11/12">
      <div className="m-4 mb-10">
        <h2 className="text-white font-semibold text-2xl">Mis entradas</h2>
      </div>
      <div className=" bg-white dark:bg-gray-700 dark:text-white">

        <div className=" bg-gray-300 p-3 text-2xl">{eventList[0].name} | {eventList[0].venue.name}  </div>
        <div className="h-60 bg-gradient-to-r from-[#AEFFBB] to-[#00FFB2] my-2 flex items-center justify-center"><p className="font-montserrat text-4xl font-semibold leading-11 tracking-wide text-green-700">
          Pago aprobado        </p></div>

      </div>
      <div className='flex gap-10'>
        <div className='bg-[#D9D9D9] h-96 w-1/2'>
          <div className='pl-4 pt-1 bg-[#F8F8F8]'><p className='font-montserrat text-2xl font-bold leading-29 tracking-normal text-left'>Resumen de compra</p>
            <p className='font-montserrat text-2xl font-normal leading-29 tracking-normal text-left text-gray-600'>{eventList[0].name} | {eventList[0].venue.name}  </p>
          </div>
          <div>
            <p className='ml-4 mt-6 mb-2 text-xl'>Tipo de entrada</p>
            <div className='flex justify-between mx-4 pb-2 border-b border-solid border-[#975D93]'>
              <p>1 X General Sin asiento</p>
              <p>$ 18,000.00</p>
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
              <p>$ 20,700.00</p>
            </div>
          </div>
        </div>
        <div className='bg-[#D9D9D9] h-96 w-1/2'>
          <div className='pl-3 pt-1 bg-[#F8F8F8]'><p className='font-montserrat text-2xl font-bold leading-29 tracking-normal text-left'>Detalle de pago</p>
            <p className='font-montserrat text-2xl font-normal leading-29 tracking-normal text-left text-gray-600'> Medio de pago: Visa</p>
          </div>

        </div>
      </div>
      <button type="button" className="text-white font-poppins text-base font-medium mt-4 w-full  h-12 bg-gradient-to-b from-[#975D93] to-[#DCA6D8] transition duration-300 hover:to-[#975D93]">  Reenviar entrada </button>
        </div > 
 )
}        
      
export default DetalleEntradas
