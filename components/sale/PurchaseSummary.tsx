import Link from 'next/link'
import React from 'react'

const PurchaseSummary: React.FC = () => {
  return (
    <div className='flex flex-col w-full mb-10 md:m-10 md:w-1/2'>
      <div className='bg-[#D9D9D9] h-96'>
        <div className='flex justify-between pl-4 pt-1 bg-[#F8F8F8]'>
          <p className='font-montserrat text-2xl font-bold leading-29 tracking-normal text-left'>Resumen de compra</p>
          <Link href={''}>Cancelar compra</Link>
        </div>
          <div>
            <p className='ml-4 mt-6 mb-2 text-xl'>Tipo de entrada</p>
            <div className='flex justify-between mx-4 pb-2 border-b border-solid border-[#975D93]'>
              <p>1 X General Sin asiento</p>
              <p>$ 18,000.00</p>
            </div>
            <p className='ml-4 mt-3 text-xl'>Servicios</p>
            <div className='flex justify-between mx-4 pb-2 border-b border-solid border-[#975D93]'>
              <p>Cargos por servicio</p> <p>$ 2,700.00</p>
            </div>
            <p className='ml-4 mt-3 text-xl'>E-Ticket</p>
            <div className='flex justify-between mx-4 pb-2 border-b border-solid border-[#975D93]'>
              <p>Descarga electronica del ticket</p>
              <p>$ 0.00</p></div>
            <div className='flex justify-between mx-4 pb-2 mt-6'>
              <p className='font-montserrat text-base font-bold leading-6 tracking-normal text-left text-[#3D37F1]'>TOTAL</p>
              <p>$ 20,700.00</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseSummary
