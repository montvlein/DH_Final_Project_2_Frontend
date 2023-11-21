'use client'

interface NavigationBarProps {
  activeButton: string
  onButtonClick: (button: string) => void
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeButton, onButtonClick }) => {
  return (
    <div className="bg-[#DCA6D8] p-2">
      <div className="gap-y-2">
        <button
          className={activeButton === 'entrega'
            ? 'w-166 h-57 flex-shrink-0 bg-white text-[#975D93] text-center font-Montserrat font-bold text-lg leading-normal p-2 px-6 m-2'
            : 'w-auto h-auto flex-shrink-0 bg-transparent text-white text-center font-Montserrat font-bold text-lg leading-normal p-2 px-6 m-2'}
          onClick={() => { onButtonClick('entrega') }}
        >
          Entrega
        </button>
        <button
          className={activeButton === 'pago'
            ? 'w-166 h-57 flex-shrink-0 bg-white text-[#975D93] text-center font-Montserrat font-bold text-lg leading-normal p-2 m-2'
            : 'w-auto h-auto flex-shrink-0 bg-transparent text-white text-center font-Montserrat font-bold text-lg leading-normal p-2 m-2'}
          onClick={() => { onButtonClick('pago') }}
        >
            Medios de Pago
        </button>
      </div>
    </div>
  )
}

export default NavigationBar
