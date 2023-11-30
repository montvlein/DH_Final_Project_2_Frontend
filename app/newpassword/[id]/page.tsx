import ChangePassword from '@/components/profile/ChangePass'

const NewPass: React.FC = () => {
  return (
    <div className="relative flex justify-center lg:items-center p-8 z-10">
      <div className="absolute top-0 w-full bg-gradient-to-r from-[#DCA6D8] to-[#975D93] h-60 z-[-10]"></div>
      <ChangePassword />
    </div>
  )
}
export default NewPass
