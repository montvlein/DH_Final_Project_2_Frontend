'use client'
import DeliveryInfo from '@/components/sale/DeliveryInfo'
import NavigationPayBar from '@/components/sale/NavigationPayBar'
import PaymentForm from '@/components/sale/PaymentForm'
import PurchaseSummary from '@/components/sale/PurchaseSummary'
import { useState, useRef } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Spinner from '@/components/Spinner'
import Image from 'next/image'

const ShoppingCart: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [successPayment, setSuccess] = useState(false)
  const router = useRouter()
  const params: any = useParams()
  const eventId = params.id

  const [activeButton, setActiveButton] = useState<string>('entrega')
  const formRef = useRef<HTMLFormElement>(null)
  const handleButtonClick = (button: string): void => {
    setActiveButton(button)
  }
  const handleFormSubmit = (): void => {
    formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
  }

  return (
    <div className='min-h-screen relative'>
      <NavigationPayBar activeButton={activeButton} onButtonClick={handleButtonClick} />
      {successPayment && <ModalSuccess />}
      {loading && <Spinner />}
      {activeButton === 'entrega'
        ? (<DeliveryInfo />)
        : (
          <div className='flex flex-col md:flex-row md:justify-between'>
            <PaymentForm formRef={formRef} setLoading={setLoading} setSuccess={setSuccess} />
            <PurchaseSummary />
          </div>
          )}
      <div className='m-4 flex justify-end'>
        <button
          className='border-solid border-2 border-[#6A6A6A] px-6'
          onClick={() => {
            activeButton === 'entrega' ? router.push('/event/' + eventId) : handleButtonClick('entrega')
          }}
        >Volver</button>
        <button
          className="text-white px-6 py-3 ml-3 bg-gradient-to-t from-[#DCA6D8] to-[#975D93]"
          onClick={(e) => {
            activeButton === 'entrega' ? handleButtonClick('Medios de Pago') : handleFormSubmit()
          }}>
          Confirmar</button>
      </div>
    </div>
  )
}
export default ShoppingCart

const ModalSuccess: React.FC = () => {
  const router = useRouter()

  return (
    <section className='absolute inset-0 z-50 bg-transparent backdrop-blur-sm flex items-center justify-center'>
      <article className='relative bg-white shadow-xl rounded-xl w-fit p-8 flex flex-col justify-center items-center gap-4'>
        <Image
          src="/logoModal.svg"
          alt="logo"
          width={76}
          height={70}
        />
        <h3>Compra existosa</h3>
        <button
          className="text-white font-poppins text-base font-medium w-[240px] rounded-xl h-10 bg-gradient-to-b from-[#975D93] to-[#DCA6D8] transition duration-300 hover:to-[#975D93]"
          onClick={() => {
            router.push('/')
          }}
        >  Ok
        </button>
      </article>
    </section>
  )
}
