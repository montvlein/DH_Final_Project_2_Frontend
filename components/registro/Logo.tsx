import React from 'react'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <>

      <Image
        src="/logoRegistro.svg"
        alt="logo"
        width={379}
        height={233}
        className="w-[880px]"
      />

    </>
  )
}

export default Logo
