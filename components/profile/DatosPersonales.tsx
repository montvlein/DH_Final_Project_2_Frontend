'use client'
import Link from 'next/link'
import { useState } from 'react'

const DatosPersonales: React.FC = () => {
  const userString = sessionStorage.getItem('user')
  const userObject = userString ? JSON.parse(userString) : null
  const [userData, setUserData] = useState(userObject)

  const handleFirstnameChange = (e:any) => {
    const name = e.target.value
    const updatedUserData = {
      ...userData,
      firstName: name,
    };

    setUserData(updatedUserData);
  }

  const handleLastnameChange = (e:any) => {
    const name = e.target.value
    const updatedUserData = {
      ...userData,
      lastName: name,
    };

    setUserData(updatedUserData);
  }

  const handleEmailChange = (e:any) => {
    const name = e.target.value
    const updatedUserData = {
      ...userData,
      mail: name,
    };

    setUserData(updatedUserData);
  }

  const handlePhoneChange = (e:any) => {
    const name = e.target.value
    const updatedUserData = {
      ...userData,
      phone: name,
    };

    setUserData(updatedUserData);
  }

  return (
    <section className="flex flex-col z-10 w-11/12">
      <div className="m-4">
        <h2 className="text-white font-semibold text-2xl">Mi cuenta</h2>
        <p className="font-semibold text-base">Modifica tus datos personales y de contacto</p>
      </div>
      <div className="shadow-lg bg-white dark:bg-gray-700 dark:text-white">
        <div className="flex gap-2 justify-around">
          <button className=" py-4 uppercase font-semibold lg:text-2xl text-xs  text-[#975D93] border-2 border-transparent border-b-[#DCA6D8]">Información personal</button>
          <Link href={'/newpassword/1'}><button className="grow py-4 uppercase font-semibold lg:text-2xl text-xs  ">Cambiar contraseña</button></Link>
          <Link href={'/mytickets/1'}><button className="grow py-4 uppercase font-semibold lg:text-2xl text-xs  ">Mis entradas</button></Link>
        </div>
        <form className="p-8">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
              <input type="text" id="first_name"
                value={userData?.firstName ?? ''}
                onChange={handleFirstnameChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>
            <div>
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
              <input type="text" id="last_name"
                value={userData?.lastName ?? ''}
                onChange={handleLastnameChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="email"
              value={userData?.mail ?? ''}
              onChange={handleEmailChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="docType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de documento</label>
              <select id="docType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" hidden disabled>Selecciona un tipo de documento</option>
                <option value="DNI">DNI</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="Registro">Registro</option>
                <option value="Libreta">Libreta</option>
              </select>
            </div>
            <div>
              <label htmlFor="docnumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero de documento</label>
              <input type="number" id="docnumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="35111222" />
            </div>
            <div>
              <label htmlFor="fechaNacimiento" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de nacimiento</label>
              <input type="date" id="fechaNacimiento" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
              <input type="tel" id="phone"
                value={userData?.phone ?? ''}
                onChange={handlePhoneChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" />
            </div>
          </div>

          <div className="flex lg:justify-end gap-2 lg:gap-4 border-2 border-transparent border-t-gray-100 p-8">
            <button className="p-4 border-2">Cancelar</button>
            <button className="p-4 bg-gradient-to-t from-[#DCA6D8] to-[#975D93] text-white fonr-bold">Guardar cambios</button>
          </div>
        </form>
      </div>
    </section>

  )
}
export default DatosPersonales
