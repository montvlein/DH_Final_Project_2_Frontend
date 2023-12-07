// import BuscadorEventos from '@/components/detalles/BuscadorEventos'
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
  const index = id - 1
  const eventList = await GetEvents()
  return (
    <>
    {
      /*
      <BuscadorEventos />
      */
    }
      <Hero1 evento={eventList[index]}/>
      <Buybar evento={eventList[index]}/>
      <Info evento={eventList[index]}/>
      <Hero2 evento={eventList[index]}/>
      <TerminosCondiciones />
    </>
  )
}
export default Details
