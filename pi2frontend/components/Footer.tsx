import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
    return (
        <footer className="#D9D9D9 py-8">
            <div className="container mx-auto flex flex-wrap">
                {/* Logo */}
                <div className="w-full md:w-1/5 text-center md:text-left">
                    <Image
                        src="/logoFooter.png"
                        alt="goldenTicket"
                        width={443}
                        height={143}
                    />
                </div>

                {/* Company */}
                <div className="w-full md:w-1/5 text-center md:text-left">
                    <h5 className="uppercase mb-4 font-bold">Company</h5>
                    <ul className="mb-4">
                        <li>
                            <a href="#" className="text-gray-500">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500">Carrer</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500">FAQ</a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="w-full md:w-1/5 text-center md:text-left">
                    <h5 className="uppercase mb-4 font-bold">Contact</h5>
                    <address className="not-italic mb-4 text-gray-500">
                        contacto@goldenticket.com<br />
                        +54 (342) 5087-137
                    </address>
                </div>

                {/* More */}
                <div className="w-full md:w-1/5 text-center md:text-left">
                    <h5 className="uppercase mb-4 font-bold">More</h5>
                    <ul className="mb-4">
                        <li>
                            <a href="#" className="text-gray-500">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500">Terms of Service</a>
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
                                <a href="#" className="text-gray-500 ml-4">
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
                <div className="text-gray-500">
                    All rights reserved@goldenticket.com.ar
                </div>
            </div>
        </footer>

    )
}

export default Footer