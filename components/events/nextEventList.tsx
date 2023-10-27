import NextEventCard from "./nextEventCard";

interface Category {
    title: string
    img: string
}

interface EventListCatalogProps {
    categories: Category[];
}

const NextEventList: React.FC<EventListCatalogProps> = function({categories}){
    const eventList = [1,2,3,4,5,6]

    return(
        <section className="flex flex-col gap-4 place-items-center bg-white p-2 font-semibold text-gray-900">
            <h3 className="text-3xl text-center font-bold">Próximos eventos en <span className="text-gray-600">Buenos Aires.</span></h3>
            <div className="p-4 flex flex-col gap-6 w-full lg:w-auto">
                <Chooser categories={categories} />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    { eventList.map( e => <NextEventCard/> )}
                </div>
            </div>
        </section>
    )
}

export default NextEventList

const Chooser: React.FC<EventListCatalogProps> = function({categories}) {
    const [selected, setSelected] = ["Top Selling", (string:String) => {} ]

    const handleFilterSelect = function (event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const title = event.currentTarget.textContent;
        if (title) {
          setSelected(title);
        }
      };
    
      return (
        <div className="flex gap-6 text-gray-500 overflow-x-auto">
          <button
            className={selected === 'Top Selling' ? 'rounded-2xl bg-pink-400 p-2 lg:py-2 lg:px-6 text-white font-semibold text-sm lg:text-md' : 'text-sm lg:text-md'}
          >
            Top Selling
          </button>
          {categories.map((cat) => (
            <button
              key={cat.title}
              className={selected === cat.title ? 'rounded-2xl bg-pink-400 py-2 px-6 text-white font-semibold' : 'text-sm lg:text-md'}
            >
              {cat.title}
            </button>
          ))}
        </div>
    );
};