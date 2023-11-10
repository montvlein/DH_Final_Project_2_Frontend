import Image from 'next/image'
interface Lugar {
  id: number
  lugar: string
  pais: string
  mes: string
  dia: number
}
const elements: Lugar[] = [
  {
    id: 1,
    lugar: 'Salta',
    pais: 'Argentina',
    mes: 'Ene',
    dia: 15
  },
  {
    id: 2,
    lugar: 'Jujuy',
    pais: 'Argentina',
    mes: 'Jul',
    dia: 7
  },
  {
    id: 3,
    lugar: 'Santa Fe',
    pais: 'Argentina',
    mes: 'Sep',
    dia: 22
  },
  {
    id: 4,
    lugar: 'Entre Rios',
    pais: 'Argentina',
    mes: 'Abr',
    dia: 10
  }
]

const Info: React.FC = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row bg-white my-10'>
        <div className="flex-1">
          <p className="font-Montserrat text-3xl font-semibold leading-11 tracking-tighter text-center text-gray-600 my-2 ml-4">    Próximas fechas</p>
          <div className="">
            <ul >
              {elements.map((lugar) => (
                <li className="my-1 ml-2"
                  key={lugar.id}
                  style={{
                    backgroundImage: `url(${lugar.id % 2 === 0 ? '/infoBlanco.svg' : '/infoVioleta.svg'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'left'
                  }}

                >
                  <div className="flex justify-center gap-8">
                    <div>
                      <p className="text-lg font-semibold leading-tight mt-1" style={{ color: lugar.id % 2 === 0 ? 'violet' : 'white' }}
                      >{lugar.lugar}</p>

                      <p className="text-lg font-semibold leading-tight" style={{ color: lugar.id % 2 === 0 ? 'violet' : 'white' }}
                      >{lugar.pais}</p>  </div> <div>
                      <p className="text-lg font-semibold leading-tight" style={{ color: lugar.id % 2 === 0 ? 'violet' : 'white' }}>{lugar.mes}</p>
                      <p className="font-DM+Sans text-3xl font-bold leading-15 tracking-normal text-left">{lugar.dia}</p></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex ml-4 md:ml-0">
          <div className='pt-8 mr-2 lg:flex-col '>
            {/* Imagen */}
            <Image
              src="/INFO.svg"
              alt="Info"
              width={70}
              height={100}
              className="w-32 h-32 sm:w-56 sm:h-56 "
            />
          </div>
          <div className="w-[878px] pt-6 mr-16 ms:mr-0">
            <h3 className="font-Montserrat text-3xl font-normal leading-14 tracking-tighter text-left">
              The Eras Tour, sexta gira de conciertos.
            </h3>
            <p className="font-Montserrat text-base font-normal leading-7 tracking-tighter text-left">
              Descrito por la propia Swift como un viaje a través de las eras musicales de su carrera, cada concierto tiene una duración de más de tres horas, consistiendo en 45 canciones interpretadas y segmentadas en diez actos, los cuales están específicamente enfocados en cada álbum de la cantante.
              La gira ha sido elogiada universalmente por el concepto, producción, y las habilidades artísticas y performativas de Swift.
              Swift anunció y estrenó diversos proyectos durante recitales de la gira, tales como ediciones especiales de Midnights, regrabaciones de la serie denominada Taylors Version de Speak Now y 1989, los videos musicales de «Karma» y «I Can See You», y el lanzamiento de «Cruel Summer» como sencillo.
            </p>

          </div>
        </div>
      </div >
    </>
  )
}

export default Info
