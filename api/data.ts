import type { Category } from '@/models/Category'
import type { EventDateTime } from '@/models/DateTime'
import type { Evento } from '@/models/Event'
import type { TicketType } from '@/models/TicketType'
import type { Venue } from '@/models/Venue'
import type { User } from '@/models/User'

export const categories: Category[] = [
  { title: 'Deportes', imageUrl: 'https://media.tycsports.com/files/2022/03/02/396970/river-pibes_862x485.jpg' },
  { title: 'Conciertos', imageUrl: 'https://aeronoticias.com.pe/noticiero/wp-content/uploads/2022/10/apla.jpg' },
  { title: 'Teatros', imageUrl: 'https://www.sanangel.edu.mx/sites/default/files/gdi/OBRA%20DE%20TEATRO.jpg' }
]

const venue4: Venue = {
  id: 4,
  name: 'Teatro Vorterix',
  country: 'Argentina',
  city: 'CABA',
  address: 'Av.Federico Lacroze 3455'
}
const venue2: Venue = {
  id: 2,
  name: 'River Plate',
  country: 'Argentina',
  city: 'CABA',
  address: 'Av. Pres. Figueroa Alcorta 7597'
}
const venue3: Venue = {
  id: 3,
  name: 'Boca Juniors',
  country: 'Argentina',
  city: 'CABA',
  address: 'Brandsen 805'
}

const ticketType1: TicketType = {
  id: 1,
  name: 'General',
  price: 200.50,
  stock: 50
}

const eventDate1: EventDateTime = {
  id: 1,
  dayAndHour: new Date(2023, 11, 24),
  ticketTypeList: [ticketType1]
}

const event1: Evento = {
  id: 1,
  dateList: [eventDate1],
  name: 'Taylor Swift',
  miniImageUrl: 'https://phsnews.com/wp-content/uploads/2023/03/Copy-of-Featured-Image-Template-4-1-900x600.png',
  bannerImageUrl: 'https://phsnews.com/wp-content/uploads/2023/03/Copy-of-Featured-Image-Template-4-1-900x600.png',
  detailImageUrl: 'https://phsnews.com/wp-content/uploads/2023/03/Copy-of-Featured-Image-Template-4-1-900x600.png',
  description: 'Género de danza que se basa en la interpretación y visión individual del bailarín o coreógrafo.',
  category: { title: 'Conciertos', imageUrl: 'https://aeronoticias.com.pe/noticiero/wp-content/uploads/2022/10/apla.jpg' },
  venue: venue4
}

const event2: Evento = {
  id: 2,
  dateList: [eventDate1],
  name: 'Red hot chilli peppers',
  miniImageUrl: 'https://www.forbesindia.com/media/images/2023/Jun/img_211963_redhotchilipeppers-1494314082_getty_bg.jpg',
  bannerImageUrl: 'https://www.forbesindia.com/media/images/2023/Jun/img_211963_redhotchilipeppers-1494314082_getty_bg.jpg',
  detailImageUrl: 'https://www.forbesindia.com/media/images/2023/Jun/img_211963_redhotchilipeppers-1494314082_getty_bg.jpg',
  description: 'Banda de rock estadounidense formada en 1983 en Los Ángeles, California.',
  category: { title: 'Conciertos', imageUrl: 'https://aeronoticias.com.pe/noticiero/wp-content/uploads/2022/10/apla.jpg' },
  venue: venue2
}

const event3: Evento = {
  id: 3,
  dateList: [eventDate1],
  name: 'Boca Juniors vs Newells',
  miniImageUrl: 'https://laverdadonline.com/wp-content/uploads/2023/06/libertadores.jpg',
  bannerImageUrl: 'https://laverdadonline.com/wp-content/uploads/2023/06/libertadores.jpg',
  detailImageUrl: 'https://laverdadonline.com/wp-content/uploads/2023/06/libertadores.jpg',
  description: 'Segunda Fase - Jornada 13 de 14',
  category: { title: 'Deportes', imageUrl: 'https://media.tycsports.com/files/2022/03/02/396970/river-pibes_862x485.jpg' },
  venue: venue3
}

const event4: Evento = {
  id: 4,
  dateList: [eventDate1],
  name: 'Danza moderna contemporanea',
  miniImageUrl: 'https://6.soompi.io/wp-content/uploads/image/20230824065223_2023082406_blackpink-2.png?s=900x600&e=t',
  bannerImageUrl: 'https://6.soompi.io/wp-content/uploads/image/20230824065223_2023082406_blackpink-2.png?s=900x600&e=t',
  detailImageUrl: 'https://6.soompi.io/wp-content/uploads/userListUserimage/20230824065223_2023082406_blackpink-2.png?s=900x600&e=t',
  description: 'Género de danza que se basa en la interpretación y visión individual del bailarín o coreógrafo.',
  category: { title: 'Teatros', imageUrl: 'https://www.sanangel.edu.mx/sites/default/files/gdi/OBRA%20DE%20TEATRO.jpg' },
  venue: venue4
}

export const eventList: Evento[] = [event1, event2, event3, event4]
export const userList: User[] = []
