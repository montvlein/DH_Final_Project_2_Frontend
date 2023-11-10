import Image from 'next/image'

const HeroCategory: React.FC = () => {
  return (
    <>
      <Image
        src="/deportesHeroCat.png"
        alt="hero1"
        objectFit='cover'
        className="w-full lg:h-96"
        width={500}
        height={100}
      />
    </>
  )
}
export default HeroCategory
