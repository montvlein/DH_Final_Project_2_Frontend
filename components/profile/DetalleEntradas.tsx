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
      <div className="shadow-lg bg-white dark:bg-gray-700 dark:text-white">

        <div className=" bg-gray-300 p-3">{eventList[0].name} | {eventList[0].venue.name}  </div>
        <div className="h-64 bg-gradient-to-r from-[#AEFFBB] to-[#00FFB2] my-2 flex items-center justify-center"><p className="font-montserrat text-4xl font-semibold leading-11 tracking-wide text-green-700">
          Pago aprobado        </p></div>

      </div>
    </section>
  )
}
export default DetalleEntradas
