import DetalleEntradas from '@/components/profile/DetalleEntradas'
// import MisEntradas from '@/components/profile/MisEntradas'

const registro: React.FC = () => {
  return (
    <div className="relative flex justify-center lg:items-center p-8">
      <div className="absolute top-0 w-full bg-gradient-to-r from-[#DCA6D8] to-[#975D93] h-1/4"></div>
      <DetalleEntradas />
    </div>
  )
}
export default registro
// <MisEntradas />
