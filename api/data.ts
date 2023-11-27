import type { Category } from '@/models/Category'

export const categories: Category[] = [
  { description: 'Deportes', urlImage: 'https://media.tycsports.com/files/2022/03/02/396970/river-pibes_862x485.jpg' },
  { description: 'Conciertos', urlImage: 'https://aeronoticias.com.pe/noticiero/wp-content/uploads/2022/10/apla.jpg' },
  { description: 'Teatros', urlImage: 'https://www.sanangel.edu.mx/sites/default/files/gdi/OBRA%20DE%20TEATRO.jpg' }
]

export const GoldenApi = {
  base: 'https://api.goldenticket.ar/',
  endoints: {
    user: {
      login: 'user/login',
      signup: 'user/register',
      data: 'user/dataUser'
    },
    event: {
      all: 'event',
    },
    ticket: {
      all: 'event/ticket'
    },
    subscription: {}
  }
}
