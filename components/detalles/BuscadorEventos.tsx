import Image from 'next/image'

const BuscadorEventos: React.FC = () => {
    return (
        <>
            <div className="w-full h-20 bg-[#2B2B2B] shadow-md flex items-center">
                <div className="relative w-full ml-4">
                    <Image
                        src="/lupa.svg"
                        alt="Buscar"
                        width={50}
                        height={50}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600"
                    />
                    <input
                        className="w-3/4 sm:w-1/2  h-14 rounded-full pl-12 bg-gray-300"
                        type="text"
                        placeholder="Buscar eventos, recitales, artistas."
                    />
                </div>
            </div>
        </>
    )
}
export default BuscadorEventos