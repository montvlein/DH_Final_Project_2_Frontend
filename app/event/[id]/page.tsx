import BuscadorEventos from '@/components/detalles/BuscadorEventos'
import Hero1 from '@/components/detalles/Hero1'
import Buybar from '@/components/detalles/Buybar'
import Info from '@/components/detalles/Info'
import TerminosCondiciones from '@/components/detalles/TerminosCondiciones'
import React from 'react'
import Hero2 from '@/components/detalles/Hero2'
import { eventList } from '@/api/data'

const detalles: React.FC = () => {
  return (
    <>
      <BuscadorEventos />
      <Hero1 />
      <Buybar />
      <Info />
      <Hero2 evento={eventList[0]}/>
      <TerminosCondiciones />
    </>
  )
}
export default detalles
