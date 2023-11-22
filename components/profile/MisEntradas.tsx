import CardsProfile from '@/components/profile/CardsProfile'
import { eventList } from '../../api/data'
import Link from 'next/link'
const MisEntradas: React.FC = () => {
  return (
    <section className="flex flex-col z-10 w-11/12">
      <div className="m-4 mb-10">
        <h2 className="text-white font-semibold text-2xl">Mis entradas</h2>
      </div>
      <div className="shadow-lg bg-white dark:bg-gray-700 dark:text-white">
        <div className="flex gap-2 justify-around">
          <Link href={'/profile/1'}><button className="grow py-4 uppercase font-semibold lg:text-2xl text-xs ">Información personal</button></Link>
          <Link href={'/newpassword/1'}><button className="grow py-4 uppercase font-semibold lg:text-2xl text-xs ">Cambiar contraseña</button></Link>
          <button className=" py-4 uppercase font-semibold lg:text-2xl text-xs  text-[#975D93] border-2 border-transparent border-b-[#DCA6D8] ">Mis entradas</button>
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
