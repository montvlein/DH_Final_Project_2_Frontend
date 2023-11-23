import type { Category } from './Category'
import type { EventDateTime } from './DateTime'
import type { Venue } from './Venue'

export interface Evento {
  id: number
  dateList: EventDateTime[]
  name: string
  miniImageUrl: string
  bannerImageUrl: string
  detailImageUrl: string
  description?: string
  category: Category
  venue: Venue
}
