'use client'

import React, { useState } from 'react'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import { useForm, type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form'

interface IPaymentForm {
  numberCredit: number
  expiry: number
  cvc: number
  name: string
  dni: number
  address: string
  cp: number
}

const PaymentForm = ({ formRef }: { formRef: React.MutableRefObject<HTMLFormElement | null> }): React.JSX.Element => {
  const { register, handleSubmit, getValues } = useForm<IPaymentForm>()
  const [state, setState] = useState({
    numberCredit: '',
    expiry: '',
    cvc: '',
    name: '',
    dni: '',
    address: '',
    cp: '',
    focus: ''
  })

  const onSubmit: SubmitHandler<IPaymentForm> = async () => {
    const values = getValues()
    console.log(values)
  }
  const onError: SubmitErrorHandler<IPaymentForm> = () => { alert('Por favor, revisar los datos.') }

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = evt.target
    setState((prev) => ({ ...prev, [name]: value }))
  }

  const handleInputFocus = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setState((prev) => ({ ...prev, focus: evt.target.name }))
  }

  return (
    <div style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} className='p-10 w-full md:w-1/2 md:m-5'>
      <h2 className='text-black font-montserrat text-2xl font-bold py-3'>Ingrese los datos de su tarjeta</h2>
      <Cards
        number={state.numberCredit}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus as 'number' | 'expiry' | 'cvc' | 'name' | ''}
      />
      <form ref= {formRef} className='w-full flex flex-col pt-10' onSubmit={handleSubmit(onSubmit, onError)}>
        <div className='w-full'>
          <div className='w-full'>
            <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Nombre y apellido</label>
            <input
              type="text"
              { ... register('name')}
              name='name'
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className='w-full border-b border-black p-3 mb-5'
            />
          </div>
          <div className='w-full'>
            <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Número de tarjeta</label>
            <input
              type="number"
              { ... register('numberCredit')}
              name='numberCredit'
              value={state.numberCredit}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className='w-full border-b border-black p-3 mb-5'
            />
          </div>
          <div className='w-full flex gap-5'>
            <div className='w-full'>
              <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Fecha de vencimiento</label>
              <input
                type="text"
                { ... register('expiry')}
                name="expiry"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                className='w-full border-b border-black p-3 mb-5'
              />
            </div>
            <div className='w-full'>
              <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Número de seguridad</label>
              <input
                type="text"
                { ... register('cvc')}
                name="cvc"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                className='w-full border-b border-black p-3 mb-5'
              />
            </div>
          </div>
          <div className='w-full'>
            <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Documento de identidad</label>
            <input
              type="text"
              { ... register('dni')}
              name="dni"
              value={state.dni}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className='w-full border-b border-black p-3 mb-5'
            />
          </div>
        </div>
        <div className='w-full pt-20'>
          <h4 className="text-black font-montserrat text-base font-medium">Dirección de facturación</h4>
          <div className='w-full pt-5'>
            <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Dirección</label>
            <input
              type="text"
              { ... register('address')}
              name="address"
              value={state.address}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className='w-full border-b border-black p-3 mb-5'
            />
          </div>
          <div className='w-full'>
            <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Codigo Postal</label>
            <input
              type="text"
              { ... register('cp')}
              name="cp"
              value={state.cp}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className='w-full border-b border-black p-3 mb-5'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default PaymentForm
