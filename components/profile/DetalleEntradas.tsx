import { eventList } from '../../api/data'
import type { Evento } from '@/models/Event'

interface CardProp {
  evento: Evento
}
const DetalleEntradas: React.FC<CardProp> = () => {
  console.log(eventList)

  return (
    <section className="flex flex-col z-10 w-11/12">
      <div className="m-4 mb-10">
        <h2 className="text-white font-semibold text-2xl">Mis entradas</h2>
      </div>
      <div className=" bg-white dark:bg-gray-700 dark:text-white">

        <div className=" bg-gray-300 p-3">{eventList[0].name} | {eventList[0].venue.name}  </div>
        <div className="h-64 bg-gradient-to-r from-[#AEFFBB] to-[#00FFB2] my-2 flex items-center justify-center"><p className="font-montserrat text-4xl font-semibold leading-11 tracking-wide text-green-700">
          Pago aprobado        </p></div>

      </div>
      <div className='flex gap-10'>
        <div className='bg-[#D9D9D9] h-96 w-1/2'>
          <div className='pl-3 pt-1 bg-[#F8F8F8]'><p className='font-montserrat text-24 font-bold leading-29 tracking-normal text-left'>Resumen de compra</p>
            <p className='font-montserrat text-24 font-normal leading-29 tracking-normal text-left text-gray-600'>{eventList[0].name} | {eventList[0].venue.name}  </p>
          </div>
          <div>
          </div>
        </div>
        <div className='bg-[#D9D9D9] h-96 w-1/2'>
          <div className='pl-3 pt-1 bg-[#F8F8F8]'><p className='font-montserrat text-24 font-bold leading-29 tracking-normal text-left'>Resumen de compra</p>
            <p className='font-montserrat text-24 font-normal leading-29 tracking-normal text-left text-gray-600'> Medio de pago: Visa</p>
          </div><div>
          </div>
        </div>
      </div>
      <button type="submit" className="text-white font-poppins text-base font-medium mt-4 w-full  h-12 bg-gradient-to-b from-[#975D93] to-[#DCA6D8] transition duration-300 hover:to-[#975D93] ">  Reenviar entrada  </button>
    </section>
  )
}
export default DetalleEntradas
