import { Category } from "@/models/Category";
import { EventDateTime } from "@/models/DateTime";
import { Evento } from "@/models/Event";
import { TicketType } from "@/models/TicketType";
import { Venue } from "@/models/Venue";
import { User } from "@/models/User";

export const categories: Category[] = [
  { title: 'Deportes', imageUrl: 'https://media.tycsports.com/files/2022/03/02/396970/river-pibes_862x485.jpg' },
  { title: 'Conciertos', imageUrl: 'https://aeronoticias.com.pe/noticiero/wp-content/uploads/2022/10/apla.jpg' },
  { title: 'Teatros', imageUrl: 'https://www.sanangel.edu.mx/sites/default/files/gdi/OBRA%20DE%20TEATRO.jpg' }
]

const venue1: Venue = {
  id: 1,
  name: "Teatro Vorterix",
  country: "Argentina",
  city: "CABA",
  address: ""
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
  name: 'Nombre del evento',
  miniImageUrl: 'https://6.soompi.io/wp-content/uploads/image/20230824065223_2023082406_blackpink-2.png?s=900x600&e=t',
  bannerImageUrl: 'https://6.soompi.io/wp-content/uploads/image/20230824065223_2023082406_blackpink-2.png?s=900x600&e=t',
  detailImageUrl: 'https://6.soompi.io/wp-content/uploads/userListUserimage/20230824065223_2023082406_blackpink-2.png?s=900x600&e=t',
  description: 'descripcion',
  category: { title: 'Teatros', imageUrl: 'https://www.sanangel.edu.mx/sites/default/files/gdi/OBRA%20DE%20TEATRO.jpg' },
  venue: venue1
}

export const eventList: Evento[] = [event1, event1, event1]
export const userList: User[] = []