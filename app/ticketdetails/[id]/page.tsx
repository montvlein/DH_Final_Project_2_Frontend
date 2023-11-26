'use client'
import DetalleEntradas from '@/components/profile/DetalleEntradas'
import GetEventsById from '@/services/GetEventsById'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
interface DetailsProps {
  params: any
}
const DetalleE: React.FC<DetailsProps> = ({ params }) => {
  const { id } = useParams()
  const ticketId = id ? String(id) : '0'

  const [ticketData, setTicketData] = useState<any>(null);

  const fetchData = async () => {
    try {
      const data = await GetEventsById(ticketId)
      setTicketData(data)
    } catch (error) {
      console.error('Error al obtener eventos por ID:', error.message)
    }
  }

  useEffect(() => {
    fetchData();
  }, [ticketId]);

  if (!ticketData) {
    // Puedes mostrar un mensaje de carga o realizar otras acciones mientras se carga la información
    return <p>Cargando...</p>
  }
  return (
    <div className="relative flex justify-center lg:items-center p-8">
      <div className="absolute top-0 w-full bg-gradient-to-r from-[#DCA6D8] to-[#975D93] h-60"></div>
      <DetalleEntradas evento={ticketData} />
    </div>
  )
}
export default DetalleE
