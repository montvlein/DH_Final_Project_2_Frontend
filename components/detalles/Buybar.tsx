'use client'

import { useForm, type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form'
import type { Evento } from '@/models/Event'
import { type AppDispatch, userUseSelector } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setSelectedTicket } from '../../redux/features/selectEventTicket-slice'

interface IFormValues {
  place: string
  price: string
  amount: string
}
interface InfoProps {
  evento: Evento
}

const Buybar: React.FC<InfoProps> = ({ evento }) => {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const userString = typeof window !== 'undefined' ? window.sessionStorage.getItem('user') : null
  const userInfo = userString !== null ? JSON.parse(userString) : userUseSelector((state) => state.userInfo.activeUser)

  const { register, handleSubmit, getValues, watch } = useForm<IFormValues>()
  const eventId = evento.id
  const selectedPlace = watch('place', '')
  const selectedPrice = watch('price', '')
  const selectedAmount = watch('amount', '')

  const onSubmit: SubmitHandler<IFormValues> = async () => {
    const values = getValues()
    const reserva = {
      dateTime: {
        id: parseInt(values.place)
      },
      ticketType: {
        id: parseInt(values.price)
      },
      event: {
        id: eventId
      },
      idUser: userInfo.id,
      amount: parseInt(values.amount)
    }
    dispatch(setSelectedTicket(reserva))
    router.push('/cart/' + eventId)
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
      <option key={fecha.id} value={fecha.id}>
        {formattedDate} - {evento.venue.venue}, {evento.venue.address}
      </option>
    )
  })

  const ticketOptions = evento.dateList.flatMap((date) =>
    date.ticketTypeList.map((ticket) => (
      <option key={ticket.id} value={ticket.id}>
        {ticket.name} - ${ticket.price}
      </option>
    ))
  )

  return (
    <div className="p-5 bg-[#2B2B2B]">
      <form className="flex flex-col gap-8 lg:flex-row lg:justify-center lg:items-center" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex flex-col md:justify-end">
          <select
            required
            {...register('place')}
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
            className="border rounded px-2 py-1 text-white lg:w-52 xl:w-96">
              <option value="" disabled selected hidden>Fecha y Lugar</option>
              {fechaLugarOptions}
          </select>
        </div>
        <div className="flex flex-col md:justify-end">
          <select
            required
            {...register('price')}
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
            className="border rounded px-2 py-1 text-white lg:w-52 xl:w-96">
              <option value=""disabled selected hidden>Precio</option>
              {ticketOptions}
          </select>
        </div>
        <div className="flex flex-col md:justify-end">
          <select
            required
            {...register('amount')}
            style={{ border: '0', borderBottom: '2px solid #7778B0', backgroundColor: '#2B2B2B' }}
            className="border rounded px-2 py-1 text-white lg:w-52 xl:w-96">
              <option value=""disabled selected hidden>Cantidad</option>
              <option value={1}>1 entrada</option>
              <option value={2}>2 entradas</option>
              <option value={3}>3 entradas</option>
            </select>
        </div>
        <button
          className="text-white px-6 py-3 lg:rounded-xl bg-gradient-to-t from-[#DCA6D8] to-[#975D93] disabled:from-gray-400 disabled:to-gray-700 disabled:cursor-not-allowed"
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          disabled={!selectedPlace || !selectedPrice || !selectedAmount || userInfo.id === 0 }
        >
          Comprar
        </button>
      </form>
    </div>
  )
}

export default Buybar
