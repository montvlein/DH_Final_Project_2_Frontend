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
      <div className='flex flex-col md:flex-row bg-white'>
        <div className="flex-1 ">
          <p className="font-Montserrat text-3xl font-semibold leading-11 tracking-tighter text-left text-gray-600 my-2 ml-4">    Próximas fechas</p>
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
        <div className="">
          <p className="font-Montserrat text-7xl font-normal leading-12 tracking-tighter  transform -rotate-90 mt-20"> INFO</p>
        </div>
        <div className="w-2/3 pt-6 pr-8 ">
          <h3 className="font-Montserrat text-3xl font-normal leading-14 tracking-tighter text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quas aliquam maiores debitis corporis voluptates
          </h3>
          <p className="font-Montserrat text-base font-normal leading-7 tracking-tighter text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dicta similique aliquid. Ipsum, recusandae. Maxime eos numquam necessitatibus ullam sequi alias, quaerat a eveniet odit expedita recusandae adipisci, repellat nihil.

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptates dolore. Veritatis dolor obcaecati soluta quia dicta omnis in illo, sequi aperiam unde dolorum nesciunt! Nostrum animi tempore laudantium tempora!
          </p>
        </div>
      </div >
    </>
  )
}

export default Info
