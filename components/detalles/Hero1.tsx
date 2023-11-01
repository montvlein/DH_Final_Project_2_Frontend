import Image from 'next/image'

const Hero1: React.FC = () => {
  return (
    <>
      <Image
        src="/hero1.svg"
        alt="hero1"
        className="w-full"
        width={50}
        height={50}
      />
    </>
  )
}
export default Hero1
