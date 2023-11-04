import { TicketType } from "./TicketType";

export class EventDateTime {
    private id: BigInt;
    private dayAndHour: Date;
    private ticketTypeList: TicketType[]

    constructor(id: BigInt, dayAndHour: Date, ticketTypeList: TicketType[]) {
        this.id = id;
        this.dayAndHour = dayAndHour;
        this.ticketTypeList = ticketTypeList;
    }

    getId(): BigInt {
        return this.id;
    }

    setId(id: BigInt): void {
        this.id = id;
    }

    getDayAndHour(): Date {
        return this.dayAndHour;
    }

    setDayAndHour(dayAndHour: Date): void {
        this.dayAndHour = dayAndHour;
    }

    getTicketTypeList(): TicketType[] {
        return this.ticketTypeList;
    }

    setTicketTypeList(ticketTypeList: TicketType[]): void {
        this.ticketTypeList = ticketTypeList;
    }
}
