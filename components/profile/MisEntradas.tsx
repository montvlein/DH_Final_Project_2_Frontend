import CardsProfile from '@/components/profile/CardsProfile'
import { eventList } from '../../api/data'

const MisEntradas: React.FC = () => {
  return (
    <section className="flex flex-col z-10 w-11/12">
      <div className="m-4 mb-10">
        <h2 className="text-white font-semibold text-2xl">Mis entradas</h2>
      </div>
      <div className="shadow-lg bg-white dark:bg-gray-700 dark:text-white">
        <div className="flex gap-4 justify-evenly">
          <button className="grow py-4 uppercase font-semibold lg:text-2xl text-[#975D93] border-2 border-transparent border-b-[#DCA6D8]">MIS ENTRADAS</button>
          <button className="grow py-4 uppercase font-semibold lg:text-2xl"><div className="mr-10"></div></button>
        </div>
        <div className="p-8 ">
          {eventList.map((evento) => (
            <CardsProfile key={evento.id} evento={evento} />
          ))}
        </div>
      </div>
    </section>

  )
}
export default MisEntradas
