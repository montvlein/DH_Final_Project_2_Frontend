'use client'

import { useForm, type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form'
import type { Evento } from '@/models/Event'

interface IFormValues {
  place: string
  price: string
  amount: string
}
interface InfoProps {
  evento: Evento
}

const Buybar: React.FC<InfoProps> = ({ evento }) => {
  const { register, handleSubmit, getValues } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = async () => {
    const values = getValues()
    console.log(values)
  }
  const onError: SubmitErrorHandler<IFormValues> = () => { alert('Por favor, revisar los datos.') }

  const fechaLugarOptions = evento.dateList.map((fecha) => {
    let date
    if (Array.isArray(fecha.dateTime)) {
      const [year, month, day] = fecha.dateTime
      date = new Date(year, month - 1, day)
    } else {
      date = new Date(fecha.dateTime)
    }
    const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

    return (
      <option key={fecha.id} value={formattedDate}>
        {formattedDate} - {evento.venue.venue}, {evento.venue.address}
      </option>
    )
  })

  const ticketOptions = evento.dateList.flatMap((date) =>
    date.ticketTypeList.map((ticket) => (
      <option key={ticket.id} value={ticket.name}>
        {ticket.name} - ${ticket.price}
      </option>
    ))
  )

  return (
    <div className="p-5" style={{ backgroundColor: '#2B2B2B' }}>
      <form className="flex flex-col gap-8 lg:flex-row lg:justify-center lg:items-center" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex flex-col md:justify-end">
          <select
            {...register('place')}
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
            className="border rounded px-2 py-1 text-white lg:w-52 xl:w-96">
              <option value="" disabled selected>Fecha y Lugar</option>
              {fechaLugarOptions}
          </select>
        </div>
        <div className="flex flex-col md:justify-end">
          <select
            {...register('price')}
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
            className="border rounded px-2 py-1 text-white lg:w-52 xl:w-96">
              <option value=""disabled selected>Precio</option>
              {ticketOptions}
          </select>
        </div>
        <div className="flex flex-col md:justify-end">
          <select
            {...register('amount')}
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
            className="border rounded px-2 py-1 text-white lg:w-52 xl:w-96">
              <option value=""disabled selected>Cantidad</option>
              <option value="opcion1">1 entrada</option>
              <option value="opcion2">2 entradas</option>
              <option value="opcion3">3 entradas</option>
            </select>
        </div>
        <button
          className="text-white px-6 py-3 lg:rounded-xl"
          style={{
            background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)'
          }}>
          Comprar
        </button>
      </form>
    </div>
  )
}

export default Buybar
