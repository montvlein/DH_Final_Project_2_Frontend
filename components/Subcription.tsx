'use client'

import React from 'react'
import { useForm, type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form'
import Image from 'next/image'

interface ISuscriptionEmail {
  email: string
}

const Subcription: React.FC = () => {
  const { register, handleSubmit, getValues } = useForm<ISuscriptionEmail>()

  const onSubmit: SubmitHandler<ISuscriptionEmail> = async () => {
    const values = getValues()
    console.log(values)
  }
  const onError: SubmitErrorHandler<ISuscriptionEmail> = () => { alert('Email invalido.') }

  return (
    <div className='bg-white flex justify-center py-6 text-gray-900'>
      <div className='w-8/12 bg-[#390F36] rounded-tl-[129px] rounded-bl-xl rounded-br-xl flex flex-col items-center'>
        <div className="relative w-full">
          <span className="absolute -right-6 -top-6 w-3/12 md:w-1/12 md:-right-7">
            <Image
              src='/suscription.svg'
              alt='logo'
              width={100}
              height={100}
              />
          </span>
        </div>
        <h2 className='text-[#D791D2] font-poppins font-semibold text-base md:text-2xl py-6 px-16 text-center xl:text-4xl xl:w-9/12'>
          Recibe noticias de grandes eventos y ofertas directamente en tu email.
        </h2>
        <form className="flex flex-col justify-center gap-4 pb-10 px-10 w-full md:flex-row" onSubmit={handleSubmit(onSubmit, onError)}>
          <label htmlFor="subsName">
            <input
              id="subsName"
              type="text"
              placeholder='Tu nombre'
              className="text-gray-900 rounded-xl h-12 px-6 w-full xl:w-96"
              { ... register('email')}
              />
          </label>
          <label htmlFor='email' className="relative">
            <Image
              src='/input email.svg'
              alt='logo'
              width={20}
              height={20}
              className="absolute top-3 left-4 h-6 w-6"
            />
            <input
              id="subsEmail"
              type="email"
              placeholder='Tu email'
              className="text-grey-700 rounded-xl pl-12 h-12 w-full xl:w-96"
              { ... register('email')}
            />
          </label>
          <button
            className="text-white px-6 py-3 rounded-xl"
            style={{
              background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)',
            }}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subcription
