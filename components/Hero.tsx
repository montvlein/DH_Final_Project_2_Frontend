const Hero: React.FC = () => {
  return (
    <>
      <div className="bg-[url('/image42.png')] bg-cover bg-center h-auto lg:h-full" >
        <div className="lg:h-full lg:flex lg:flex-col lg:justify-center md:pl-20">
          <p className= 'max-w-screen text-pink-500 font-poppins font-semibold text-lg p-5 pr-20 uppercase'>
            tus shows favoritos en un solo lugar
          </p>
          <div className='md:w-1/2'>
            <h1 className= 'max-w-screen text-white font-poppins text-5xl font-medium p-5 lg:text-6xl'>
              Tu próxima mejor noche te está esperando.<br /> Y tenemos las entradas.
            </h1>
          </div>
          <div className='flex flex-col items-end p-10 lg:pb-20'>
            <p className='text-white font-poppins font-semibold text-4xl'>Foo Fighters</p>
            <p className='text-white font-poppins font-medium text-xl '> Live in Concert</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
