import Link from 'next/link'

const NoTienesCuenta: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className='w-full lg:w-[480px]'>
          <hr className="border-t border-gray-400 w-40 my-4   mx-auto " />
          <p className='font-montserrat text-base font-light leading-5 tracking-normal text-center'>
            ¿No tienes una cuenta?
          </p>
          <Link href="/signup">
            <button type="submit" className="text-[#975D93] font-poppins text-base font-medium w-full rounded-xl h-14 border-[#975D93] border hover:bg-white mt-2">
              Registrate!
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default NoTienesCuenta
