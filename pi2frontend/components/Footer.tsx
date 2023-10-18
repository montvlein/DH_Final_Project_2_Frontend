import React from 'react'
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

const Footer: React.FC = () => {
    return (

        <footer className="#D9D9D9 py-8">
            <div className="container mx-auto flex flex-wrap">
                {/* Logo */}
                <div className="w-full md:w-1/5 text-center md:text-left">
                    <a href="#" className="text-3xl font-bold">
                        Logo
                    </a>
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
                        nombre@nombre.com<br />
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
                    <ul className="mb-4">
                        <li>
                            <a href="#" className="mr-4">
                                fb
                            </a><a href="#" className="mr-4">
                                ig
                            </a><a href="#" className="mr-4">
                                tw
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500">
                                Discover our app
                            </a>
                        </li>
                        <li>
                            <a href="#" className="mr-4">
                                Android
                            </a>
                            <a href="#" className="mr-4">
                                IOS
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full  text-center  mt-6 mb-4">
                <div className="text-gray-500">
                    All rights reserved@multiticket.com.ar
                </div>
            </div>
        </footer>

    )
}

export default Footer