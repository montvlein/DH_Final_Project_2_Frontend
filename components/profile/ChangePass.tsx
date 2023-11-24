/* eslint-disable @typescript-eslint/restrict-plus-operands */
'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const ChangePassword: React.FC = () => {
  const param = useParams()
  const userId = param?.id ?? 0

  return (

    <section className="flex flex-col z-10 w-11/12">
      <div className="m-4">
        <h2 className="text-white font-semibold text-2xl">Mi cuenta</h2>
        <p className="font-semibold text-base">Modifica tu contraseña</p>
      </div>
      <div className="shadow-lg bg-white dark:bg-gray-700 dark:text-white">
        <div className="flex lg:gap-2 justify-around">
          <Link href={'/profile/' + userId }><button className="grow py-4 uppercase font-semibold lg:text-2xl text-xs ">Información personal</button></Link>
          <button className=" py-4 uppercase font-semibold lg:text-2xl text-[#975D93] border-2 border-transparent border-b-[#DCA6D8] text-xs  ">Cambiar contraseña</button>
          <Link href={'/mytickets/' + userId }><button className="grow py-4 uppercase font-semibold lg:text-2xl text-xs ">Mis entradas</button></Link>
        </div>
        <form className="p-8 lg:mx-28">
          <label htmlFor="passOld" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Contraseña actual</label>
          <input
            type="password"
            id="passOld"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="*****"
            required />
          <label htmlFor="PassNew" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Contraseña nueva</label>
          <input
            type="password"
            id="PassNew"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="*****"
            required />
          <label htmlFor="passNew2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Repetir contraseña</label>
          <input
            type="password"
            id="passNew2"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="*****"
            required />

          <div className="flex lg:justify-end gap-2 lg:gap-4 border-2 border-transparent border-t-gray-100 p-8">
            <button className="p-4 border-2">Cancelar</button>
            <button className="p-4 bg-gradient-to-t from-[#DCA6D8] to-[#975D93] text-white fonr-bold">Guardar cambios</button>
          </div>
        </form>
      </div>
    </section>

  )
}
export default ChangePassword
