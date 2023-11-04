export class TicketType {
    private id: BigInt;
    private name: string;
    private price: string;
    private stock: string;

    constructor(id: BigInt, name: string, price: string, stock: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    getId(): BigInt {
        return this.id;
    }

    setId(id: BigInt): void {
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getPrice(): string {
        return this.price;
    }

    setPrice(price: string): void {
        this.price = price;
    }

    getStock(): string {
        return this.stock;
    }

    setStock(stock: string): void {
        this.stock = stock;
    }
}
