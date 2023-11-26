import React from 'react'

const DeliveryInfo: React.FC = () => {
  const event = {
    name: 'Nombre del evento',
    venue: {
      venue: 'Lugar'
    }
  }

  return (
    <>
      <h3 className='font-montserrat text-18 font-bold m-5'>Modo en que recibes tus tickets</h3>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <div className='bg-[#D9D9D9] w-full p-4 md:mx-4 '>
          <p className='text-black font-montserrat text-base font-medium'>E-Ticket</p>
          <p className='text-black font-montserrat text-base font-medium'>Costo $0.00</p>
        </div>
        <div className='bg-[#D9D9D9] p-4 md:mr-4'>
          <p className='text-black font-montserrat text-base font-medium'>Al finalizar, el ticket estará disponible en tu historial de compra, para que lo imprimas o lo presentes, desde tu dispositivo móvil, al ingresar al recinto.</p>
        </div>
      </div>
      <div className=" bg-[#F8F8F8] p-5 mt-4 text-black font-montserrat text-base font-bold">{event.name} | {event.venue.venue} | 09 DE NOVIEMBRE 2023 </div>
      <div className='bg-[#D9D9D9] flex flex-col p-4 md:justify-between md:mx-4'>
        <div>
          <h4 className='text-black font-montserrat text-base font-bold'>UBICACIONES</h4>
          <div className='flex justify-between'>
              <p className='md:pr-40'>1 X General Sin asiento</p>
              <p>$ 18,000.00</p>
            </div>
            <div className='flex justify-between'>
              <p>Cargos por servicio</p>
              <p>$ 2,700.00</p>
          </div>
        </div>
        <div>
          <h4 className='text-black font-montserrat text-base font-bold'>ENTREGA</h4>
          <div className='flex justify-between'>
              <p className='md:pr-40'>E-Ticket</p>
              <p>$ 0.00</p>
          </div>
        </div>
        <div>
          <h4 className='text-black font-montserrat text-base font-bold'>A PAGAR</h4>
          <div className='flex justify-between'>
              <p className='md:pr-40'>TICKET +COSTO POR SERVICIO</p>
              <p>$ 20,700.00</p>
            </div>
            <div className='flex justify-between'>
              <p>E-Ticket</p>
              <p>$ 0.00</p>
          </div>
          <div className='flex justify-between pt-10'>
              <p className='text-[#3D37F1] font-bold'>TOTAL</p>
              <p>$ 20,700.00</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeliveryInfo
