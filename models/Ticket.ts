export class Ticket {
    private id: BigInt;
    private idEvent: BigInt;
    private idUser: BigInt;
    private idTicketType: BigInt;
    private idEventDateTime: BigInt;

    constructor(
        id: BigInt,
        idEvent: BigInt,
        idUser: BigInt,
        idTicketType: BigInt,
        idEventDateTime: BigInt
    ) {
        this.id = id;
        this.idEvent = idEvent;
        this.idUser = idUser;
        this.idTicketType = idTicketType;
        this.idEventDateTime = idEventDateTime;
    }

    getId(): BigInt {
        return this.id;
    }

    getIdEvent(): BigInt {
        return this.idEvent;
    }

    getIdUser(): BigInt {
        return this.idUser;
    }

    getIdTicketType(): BigInt {
        return this.idTicketType;
    }

    getIdEventDateTime(): BigInt {
        return this.idEventDateTime;
    }
}
