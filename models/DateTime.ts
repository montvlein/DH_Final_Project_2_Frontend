import { TicketType } from "./TicketType";

export interface EventDateTime {
    id: BigInt;
    dayAndHour: Date;
    ticketTypeList: TicketType[]
}
