import BuscadorEventos from '@/components/detalles/BuscadorEventos'
import Hero1 from '@/components/detalles/Hero1'
import TerminosCondiciones from '@/components/detalles/TerminosCondiciones'
import React from 'react'

const detalles: React.FC = () => {
    return (
        <>
            <BuscadorEventos />
            <Hero1 />
            <TerminosCondiciones />
        </>
    )
}
export default detalles