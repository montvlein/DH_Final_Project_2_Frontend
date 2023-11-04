export class Venue {
    private id: BigInt;
    private name: string;
    private country: string;
    private city: string;

    constructor(id: BigInt, name: string, country: string, city: string) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.city = city;
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

    getCountry(): string {
        return this.country;
    }

    setCountry(country: string): void {
        this.country = country;
    }

    getCity(): string {
        return this.city;
    }

    setCity(city: string): void {
        this.city = city;
    }
}
