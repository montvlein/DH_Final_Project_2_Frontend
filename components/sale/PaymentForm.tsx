/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React, { useState } from 'react'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import { useForm, type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { type RootState } from '@/redux/store'
import { GoldenApi } from '@/api/data'

interface IPaymentForm {
  numberCredit: string
  expiry: string
  cvc: number
  name: string
  dni: number
  address: string
  cp: number
}

const PaymentForm = ({ formRef, setLoading, setSuccess }: {
  formRef: React.MutableRefObject<HTMLFormElement | null>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>
}): React.JSX.Element => {
  const { register, handleSubmit } = useForm<IPaymentForm>()
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

  const selectedTicket = useSelector((state: RootState) => state.selectedTicket.ticket)

  const onSubmit: SubmitHandler<IPaymentForm> = async () => {
    setLoading(true)
    // const values = getValues()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const baseUrl = GoldenApi.base
    const endpoint = GoldenApi.endoints.ticket.all
    const apiTicketUrl = baseUrl + endpoint

    fetch(apiTicketUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedTicket)
    })
      .then(async res => await res.json())
      .then(data => {
        console.log(data)
        setSuccess(true)
      })
      .catch(err => {
        console.error(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const onError: SubmitErrorHandler<IPaymentForm> = () => { alert('Por favor, revisar los datos.') }

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = evt.target
    switch (name) {
      case 'numberCredit':
        // eslint-disable-next-line no-case-declarations
        const sanitizedValue = value.replace(/\D/g, '')
        // eslint-disable-next-line no-case-declarations
        const formattedValue = sanitizedValue.replace(/(\d{4})/g, '$1 ').trim()
        setState((prev) => ({ ...prev, [name]: formattedValue }))
        break
      case 'expiry':
        setState((prev) => {
          if (value.length === 3 && prev.expiry.length === 2) {
            return { ...prev, [name]: value.substring(0, 2) + '/' + value.substring(2) }
          }
          return { ...prev, [name]: value }
        })
        break
      default:
        setState((prev) => ({ ...prev, [name]: value }))
        break
    }
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
              placeholder='Cosme Fulanito'
              className='w-full border-b border-black p-3 mb-5 focus:outline-none focus:border-b-2 focus:border-blue-500 focus:font-semibold'
            />
          </div>
          <div className='w-full'>
            <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Número de tarjeta</label>
            <input
              type="text"
              { ... register('numberCredit')}
              name='numberCredit'
              value={state.numberCredit}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              maxLength={19}
              placeholder='XXXX XXXX XXXX XXXX'
              className='w-full border-b border-black p-3 mb-5 focus:outline-none focus:border-b-2 focus:border-blue-500 focus:font-semibold'
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
                maxLength={7}
                placeholder='12/2024'
                className='w-full border-b border-black p-3 mb-5 focus:outline-none focus:border-b-2 focus:border-blue-500 focus:font-semibold'
              />
            </div>
            <div className='w-full'>
              <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Número de seguridad</label>
              <input
                type="number"
                { ... register('cvc')}
                name="cvc"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLength={3}
                placeholder='123'
                className='w-full border-b border-black p-3 mb-5 focus:outline-none focus:border-b-2 focus:border-blue-500 focus:font-semibold'
              />
            </div>
          </div>
          <div className='w-full'>
            <label className='text-[#6A6A6A] font-montserrat text-base font-normal'>Documento de identidad</label>
            <input
              type="number"
              { ... register('dni')}
              name="dni"
              value={state.dni}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder='XXxxxXXX'
              className='w-full border-b border-black p-3 mb-5 focus:outline-none focus:border-b-2 focus:border-blue-500 focus:font-semibold'
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
              className='w-full border-b border-black p-3 mb-5 focus:outline-none focus:border-b-2 focus:border-blue-500 focus:font-semibold'
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
              className='w-full border-b border-black p-3 mb-5 focus:outline-none focus:border-b-2 focus:border-blue-500 focus:font-semibold'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default PaymentForm

function datosPagoTarjeta (values: any): void {
  const expiryMonth = values.expiry.split('/')[0]
  const expiryYear = values.expiry.split('/')[1]
  const cardNumber = values.numberCredit.replace(/\s/g, '')

  const cardData = {
    card_number: cardNumber,
    card_expiration_month: expiryMonth,
    card_expiration_year: expiryYear,
    security_code: values.cvc,
    card_holder_name: values.name,
    card_holder_identification: {
      type: 'dni',
      number: values.dni
    }
  }

  const publicApiKey = '4ae76f00234843d1af5994ed4674fd76'
  const privateApiKey = '3891f691dc4f40b6941a25a68d17c7f4'
  const apiPaywayUrl = 'https://developers.decidir.com/api/v2'
  const paywayTokenEndpoint = '/tokens'
  const paywayPaymentEndpoint = '/payment'
  const setOptions = (apikey: string, data: any): { method: string, headers: Record<string, string>, body: string } => {
    return {
      method: 'POST',
      headers: {
        apikey: apikey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  }

  fetch(apiPaywayUrl + paywayTokenEndpoint, setOptions(publicApiKey, cardData))
    .then(async res => await res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.error(err.message)
    })
    .finally(() => {
    })
}
