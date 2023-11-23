import BuscadorEventos from '@/components/detalles/BuscadorEventos'
import Hero1 from '@/components/detalles/Hero1'
import Buybar from '@/components/detalles/Buybar'
import Info from '@/components/detalles/Info'
import TerminosCondiciones from '@/components/detalles/TerminosCondiciones'
import React from 'react'
import Hero2 from '@/components/detalles/Hero2'
import GetEvents from '@/services/GetEvents'

interface DetailsProps {
  params: any
}

const Details: React.FC<DetailsProps> = async ({ params }) => {
  const { id } = params
  const eventList = await GetEvents()
  return (
    <>
      <BuscadorEventos />
      <Hero1 evento={eventList[id]}/>
      <Buybar evento={eventList[id]}/>
      <Info evento={eventList[id]}/>
      <Hero2 evento={eventList[id]}/>
      <TerminosCondiciones />
    </>
  )
}
export default Details
