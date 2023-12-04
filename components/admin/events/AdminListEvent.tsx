import GetEvents from '@/services/GetEvents'
import type { Evento } from '@/models/Event'

export default async function EventListTable (): Promise<JSX.Element> {
  const eventList = await GetEvents()

  return (
    <div className="relative overflow-x-auto rounded">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Categoria
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Acción
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    eventList.map((eventData: Evento) => (
                        <tr key={eventData.id} className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                { eventData.id }
                            </th>
                            <td className="px-6 py-4">
                                { eventData.name }
                            </td>
                            <td className="px-6 py-4">
                                { eventData?.category?.description }
                            </td>
                            <td className="px-6 py-4 flex items-center justify-center gap-4">
                                <button disabled className='bg-sky-200 text-white rounded py-2 px-4 disabled:cursor-not-allowed'>Editar</button>
                                <button disabled className='bg-white border-2 border-red-300 rounded py-2 px-4 disabled:cursor-not-allowed'>Eliminar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
