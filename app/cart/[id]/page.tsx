'use client'
import DeliveryInfo from '@/components/sale/DeliveryInfo'
import NavigationPayBar from '@/components/sale/NavigationPayBar'
import PaymentForm from '@/components/sale/PaymentForm'
import PurchaseSummary from '@/components/sale/PurchaseSummary'
import Hero1 from '@/components/detalles/Hero1'
import { useState, useRef } from 'react'

const ShoppingCart: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('entrega')
  const formRef = useRef<HTMLFormElement>(null)
  const handleButtonClick = (button: string): void => {
    setActiveButton(button)
  }
  const handleFormSubmit = (): void => {
    formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
  }

  return (
    <>
      <Hero1 />
      <NavigationPayBar activeButton={activeButton} onButtonClick={handleButtonClick} />
      {activeButton === 'entrega'
        ? (<DeliveryInfo />)
        : (
            <div className='flex flex-col md:flex-row md:justify-between'>
              <PaymentForm formRef={formRef} />
              <PurchaseSummary />
            </div>
          )}
      <div className='m-4 flex justify-end'>
        <button className='border-solid border-2 border-[#6A6A6A] px-6'>Volver</button>
        <button
          className="text-white px-6 py-3 ml-3"
          style={{
            background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)'
          }}
          onClick={handleFormSubmit}>
          Confirmar</button>
      </div>
    </>
  )
}
export default ShoppingCart
