import BuscadorEventos from '@/components/detalles/BuscadorEventos'
import Hero1 from '@/components/detalles/Hero1'
import Buybar from '@/components/detalles/Buybar'
import Info from '@/components/detalles/Info'
import TerminosCondiciones from '@/components/detalles/TerminosCondiciones'
import React from 'react'

const detalles: React.FC = () => {
  return (
    <>
      <BuscadorEventos />
      <Hero1 />
      <Buybar />
      <Info />
      <TerminosCondiciones />
    </>
  )
}
export default detalles
