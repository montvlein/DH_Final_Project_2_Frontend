import React from 'react'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <>

      <Image
        src="/registroIzq.svg"
        alt="logo"
        width={979}
        height={150}
        className="hidden md:block"
      />

    </>
  )
}

export default Logo
