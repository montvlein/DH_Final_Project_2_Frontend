import type { TicketType } from './TicketType'

export interface EventDateTime {
  id: number
  dateTime: Date
  ticketTypeList: TicketType[]
}
