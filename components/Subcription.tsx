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
    <div className='bg-white flex justify-center py-6 '>
      <div className='w-10/12 bg-[#390F36] rounded-tl-[129px] rounded-bl-xl rounded-br-xl flex flex-col items-center'>
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
        <h1 className='text-[#D791D2] font-poppins font-semibold text-base md:text-2xl p-16 text-center xl:text-4xl xl:w-9/12'>
          Recibe noticias de grandes eventos y ofertas directamente en tu email.
        </h1>
        <form className="flex flex-col justify-center space-x-5 pb-10 space-y-5 w-full md:flex-row" onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="relative flex items-center px-6 md:items-end">
            <span className="absolute inset-y-0 left-0 flex items-center pl-10 w-full md:pt-6">
              <Image
                src='/input email.svg'
                alt='logo'
                width={20}
                height={20}
              />
            </span>
            <input
              id="name"
              type="text"
              placeholder='Tu email'
              className="bg-white rounded-xl h-12 pl-12 w-full xl:w-96"
              { ... register('email')}
            />
          </div>
          <button
            className="text-white px-6 py-3 rounded-xl"
            style={{
              background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)',
              marginLeft: '25px',
              marginRight: '25px',
              paddingLeft: '25px',
              paddingRight: '25px'
            }}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subcription
