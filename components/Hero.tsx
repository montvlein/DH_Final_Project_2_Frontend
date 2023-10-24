import Image from 'next/image'
import hero from '../public/image42.png'

const Hero: React.FC = () => {
  return (
    <>
      <div className='fixed w-full h-full inset-0 z-[-1]'>
        <Image
          alt="Foo Fighters"
          src={hero}
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <p className= 'text-pink-500 font-poppins text-2xl font-semibold leading-normal uppercase' style={{ paddingTop: '13rem', paddingLeft: '5rem' }}>
        tus shows favoritos en un solo lugar
      </p>
      <div style={{ paddingLeft: '5rem', paddingTop: '2rem', maxWidth: '730px' }}>
        <h1 className= 'text-white font-poppins font-medium leading-[70px] tracking-[-2.56px]' style={{ fontSize: '64px' }}>
          Tu próxima mejor noche te está esperando.<br /> Y tenemos las entradas.
        </h1>
      </div>
      <div style={{ paddingLeft: '5rem', paddingTop: '2rem' }}>
        <button
          className="text-white px-6 py-3 rounded-full border-2 border-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
          style={{
            borderRadius: '50px',
            background: 'linear-gradient(180deg, #975D93 0%, #DCA6D8 100%)',
            width: '168px',
            marginRight: '10px'
          }}>
          Entradas
        </button>
        <button
          className=' text-white px-6 py-3 rounded-full border-2 border-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50'
          style={{
            width: '168px'
          }}>
          +info
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'flex-end', flexWrap: 'wrap', alignItems: 'flex-start', marginRight: '5rem' }}>
        <p className='text-white font-poppins font-semibold' style={{ fontSize: '40px' }}>Foo Fighters</p>
        <p className='text-white font-poppins font-medium' style={{ fontSize: '20px' }}> Live in Concert</p>
      </div>
    </>
  )
}

export default Hero
