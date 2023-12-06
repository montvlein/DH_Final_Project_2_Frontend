export interface Ticket {
  id?: number
  event: {
    id: number
    description?: string
    description_title?: string
    name?: string
    venue?: any
    miniImageUrl?: string
    bannerImageUrl?: string
    detailImageUrl?: string
    category?: any
  }
  ticketType: {
    id: number
    name?: string
    stock?: number
    price?: number
    urlImage?: string
  }
  dateTime: {
    id: number
    dateTime?: number[]
    capacity?: any
  }
  idUser: number
  amount?: number
}
