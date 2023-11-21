import DatosPersonales from '@/components/profile/DatosPersonales'

const registro: React.FC = () => {
  return (
    <div className="relative flex justify-center lg:items-center p-8">
      <div className="absolute top-0 w-full bg-gradient-to-r from-[#DCA6D8] to-[#975D93] h-60"></div>
      <DatosPersonales />
    </div>
  )
}
export default registro
