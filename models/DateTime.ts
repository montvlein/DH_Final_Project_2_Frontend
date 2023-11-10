import { TicketType } from "./TicketType";

export interface EventDateTime {
    id: number;
    dayAndHour: Date;
    ticketTypeList: TicketType[]
}
