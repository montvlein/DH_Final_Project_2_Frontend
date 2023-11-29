import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <div className="bottom-0 left-0 w-full bg-gray-300 py-10">
      <div className="container flex flex-nowrap flex-row my-2">
        {/* Logo */}
        <div className="w-1/2 md:w-1/4 text-center md:text-left pl-4 pr-4">
          <Image
            src="/logoFooter.svg"
            alt="goldenTicket"
            width={443}
            height={143}
          />
        </div>
        {/* Company */}
        <div className="w-full md:w-1/5 pl-2 text-center md:text-left hidden md:block">
          <h5 className="mb-4 font-poppins text-xl font-semibold">
            Links de interés
          </h5>

          <ul className="font-poppins text-base font-medium text-gray-500">
            <li>
              <Link href="/category/Teatros">
                Teatros
              </Link>
            </li>
            <li>
              <Link href="/category/Conciertos">
                Conciertos
              </Link>
            </li>
            <li>
              <Link href="/category/Deportes">
                Deportes
              </Link>
            </li>
          </ul>
        </div>
        {/* More */}
        <div className="w-full md:w-1/5 text-center md:text-left hidden md:block">
          <h5 className="mb-4 font-poppins text-xl font-semibold">
            Clientes
          </h5>
          <ul className="font-poppins text-base font-medium text-gray-500">
            <li>
              <Link href="/signin">
                Iniciar sesión
              </Link>
            </li>
            <li>
              <Link href="/signup">
                Resgistrarse
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className="w-full md:w-1/5 text-center md:text-left hidden md:block mr-2">
          <h5 className="mb-4 font-poppins text-xl font-semibold">
            Contacto
          </h5>
          <address className="not-italic mb-4 font-poppins text-base font-medium text-gray-500">
            contacto@goldenticket.ar<br />
            +54 (342) 5087-277
          </address>
        </div>
        {/* Social Media */}
        <div className="w-1/3 md:w-1/4 text-center md:text-center mr-1">
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Link href="https://www.facebook.com">
              <Image
                src="/fb.png"
                alt="facebook"
                width={49}
                height={47}
              />
            </Link>
            <Link href="https://www.instagram.com">
              <Image
                src="/ig.png"
                alt="instagram"
                width={53}
                height={50}
              />
            </Link>
            <Link href="https://twitter.com">
              <Image
                src="/tw.png"
                alt="twitter"
                width={49}
                height={47}
              />
            </Link>
          </div>
          <div className="font-poppins text-base font-medium text-gray-500 mb-2">
            Discover our app
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Link href="https://appstore.com">
              <Image
                src="/GPlay.png"
                alt="appStore"
                width={114}
                height={35}
              />
            </Link>
            <Link href="https://appstore.com">
              <Image
                src="/iosPlay.png"
                alt="iosStore"
                width={107}
                height={35}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-6 mb-4">
        <div className="w-full text-center mt-6 mb-4 font-poppins md:text-base text-sm font-medium text-gray-500">
          All rights reserved@goldenticket.ar
        </div>
      </div>

    </div>
  )
}
export default Footer
