import EventListCatalog from "@/components/events/catalog"

const Home: React.FC = () => {
  const categories = [
    {title: "Deportes", img:'/deportes.svg'},
    {title: "Conciertos", img:'/conciertos.svg'},
    {title: "Teatros", img:'/teatros.svg'}
  ]

  return (
    <>
      <EventListCatalog categories={categories}/>
    </>
  )
}

export default Home
