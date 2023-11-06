import Link from 'next/link'

const YaTienesCuenta: React.FC = () => {
  return (
    <><div className="flex flex-col justify-center items-center">
      <hr className="border-t border-gray-400 w-40 my-4 inline-block" />
      <p className='font-montserrat text-base font-light leading-5 tracking-normal '>¿Ya tienes una cuenta?</p>
      <Link href="/signin">
        <button type="submit" className="text-[#975D93] font-poppins text-base font-medium w-[480px] rounded-xl h-14 border-[#975D93] border hover:bg-white mt-2">
          Inicia sesión
        </button>
      </Link>
    </div>

    </>
  )
}
export default YaTienesCuenta
