import Image from 'next/image';
import React from 'react';

const TerminosCondiciones: React.FC = () => {
    return (
        <>
            <div className="flex lg:flex-row bg-white pt-3 pl-4">
                <div className="pt-8 pr-2 sm:w-1/8 ">
                    {/* Imagen */}
                    <Image
                        src="/T&C.svg"
                        alt="titulo"
                        width={170}
                        height={300}
                        className="mx-2"
                    />
                </div>
                <div className="flex flex-col lg:flex-row bg-white pt-3 pl-4">
                    <div className="lg:w-3/5 p-4 flex justify-center">
                        {/* Terminos&Condiciones */}
                        <div>
                            <p className='font-montserrat text-base font-bold leading-7 tracking-tighter text-left'>Terminos y condiciones.</p>
                            <p className='font-montserrat font-normal leading-7 tracking-tighter text-left'>
                                1. Tu/s ticket/s serán smart tickets que tendrás disponibles en la App de wallet a partir. Recibirás las instrucciones por mail para descargarte la App en tu celular y obtener los Smart tickets.
                            </p>
                            <p className='font-montserrat text-base font-normal leading-7 tracking-tighter text-left'>
                                2. La compra de tus entradas constituye una licencia personal revocable y, en todo momento, es propiedad del organizador del evento.</p>
                            <p className='font-montserrat text-base font-normal leading-7 tracking-tighter text-left'>3. De asistir en grupo, cada persona deberá disponer de su Smart Ticket individual en la aplicación de su dispositivo.</p>
                            <p className='font-montserrat text-base font-normal leading-7 tracking-tighter text-left'>4. Para que el Smart Ticket sea válido, al ingresar al estadio el día del show, se podrá solicitar que el titular de la compra provea la siguiente información: 1) Foto de un documento de identidad (DNI, licencia de conducir, pasaporte) 2) Mail de confirmación de compra.</p>
                            <p className='font-montserrat text-base font-normal leading-7 tracking-tighter text-left'>5. El organizador del evento vende sus boletos directamente a usted, el consumidor. Las entradas compradas por empresas o comerciantes que infrinjan los términos y condiciones de venta de entradas pueden cancelarse. Al aceptar estos términos y condiciones, usted confirma que es un consumidor.</p>
                        </div>
                    </div>
                    <div className=" lg:w-1/3 pt-7 pr-4">
                        {/* POLITICA DE MENORES */}
                        <div className="mx-4">
                            <p className="font-montserrat text-xl font-semibold leading-7 tracking-tighter text-left text-gray-600">
                                POLITICA DE MENORES
                            </p>
                            <p className='font-montserrat text-base font-normal leading-7 tracking-tighter text-left'>Se prohíbe el ingreso a menores de 2 años. A partir de los 2 años deberán abonar una entrada.</p>
                            <hr className="mt-2 mb-6 border-t-2 text-gray-600" />
                            <p className="font-montserrat text-xl font-semibold leading-7 tracking-tighter text-left text-gray-600">IMPORTANTE</p>
                            <p className='font-montserrat text-base font-normal leading-7 tracking-tighter text-left'>Se permite la compra de un máximo de 4 entradas por usuario y operación. En caso de detectar compras que no cumplan con lo establecido, las mismas serán dadas de baja.</p>
                            <hr className="mt-6 mb-2 border-t-2 text-gray-600" />
                            <p className='font-montserrat text-base font-normal leading-7 tracking-tighter text-left'>Si los datos solicitados en el checkout (DNI, fecha de nacimiento) no coinciden con los datos de la tarjeta, las entradas serán dadas de baja.</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default TerminosCondiciones;
