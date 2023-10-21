import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <footer className="#D9D9D9 fixed bottom-0 left-0 w-full bg-gray-300 py-8">
            <div className="container flex flex-wrap">
                {/* Logo */}
                <div className="pl-2 w-full md:w-1/5 text-center md:text-left">
                    <Image
                        src="/logoFooter.png"
                        alt="goldenTicket"
                        width={443}
                        height={143}
                    />
                </div>

                {/* Company */}
                <div className="w-full md:w-1/5 text-center md:text-left pl-2">
                    <h5 className="mb-4 font-poppins text-xl font-semibold leading-6 text-left">
                        Compañia
                    </h5>

                    <ul className="font-poppins text-base font-medium leading-6 text-gray-500">
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Carrer</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="w-full md:w-1/5 text-center md:text-left">
                    <h5 className="mb-4 font-poppins text-xl font-semibold leading-6 text-left">
                        Contacto
                    </h5>
                    <address className="not-italic mb-4 font-poppins text-base font-medium leading-6 text-left text-gray-500">
                        contacto@goldenticket.com<br />
                        +54 (342) 5087-137
                    </address>
                </div>

                {/* More */}
                <div className="w-full md:w-1/5 text-center md:text-left">
                    <h5 className="mb-4 font-poppins text-xl font-semibold leading-6 text-left">
                        Más
                    </h5>
                    <ul className="not-italic mb-4 font-poppins text-base font-medium leading-6 text-left text-gray-500">
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="w-full md:w-1/5 text-center md:text-left">
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Link href="https://www.facebook.com">
                            <Image
                                src="/fb.png"
                                alt="facebook"
                                width={43}
                                height={41}
                            />
                        </Link>
                        <Link href="https://www.instagram.com">
                            <Image
                                src="/ig.png"
                                alt="instagram"
                                width={48}
                                height={45}
                            />
                        </Link>
                        <Link href="https://twitter.com">
                            <Image
                                src="/tw.png"
                                alt="twitter"
                                width={43}
                                height={41}
                            />
                        </Link>
                    </div>
                    <div>
                        <ul className="mb-4">
                            <li>
                                <a href="#" className="font-poppins text-base font-medium leading-6 text-gray-500">
                                    Discover our app
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
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
                </div></div>
            <div className="w-full  text-center  mt-6 mb-4">
                <div className="w-full text-center mt-6 mb-4 font-poppins text-base font-medium leading-4 text-gray-500">
                    All rights reserved@goldenticket.com.ar
                </div>
            </div>
        </footer>
    )
}

export default Footer
