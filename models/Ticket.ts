export interface Ticket {
    id?: number
    event: {
        id:number
    };
    ticketType: {
        id:number
    };
    dateTime: {
        id:number
    };
    idUser: number
    amount?: number
}
