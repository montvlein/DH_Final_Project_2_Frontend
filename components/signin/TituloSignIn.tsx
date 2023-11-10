import Image from 'next/image'

const TituloSignIn: React.FC = () => {
  return (
    <><div className='flex justify-between'>
      <h1 className="font-poppins text-4xl font-bold leading-60 tracking-normal text-left ml-4 mt-4 text-[#975D93]">Inicia sesión</h1>
      <Image
        src="/logoRegistro.svg"
        alt="iosStore"
        width={175}
        height={224} />
    </div>
    </>
  )
}
export default TituloSignIn
