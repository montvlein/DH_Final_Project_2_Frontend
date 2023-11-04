export class User {
    private id: BigInt;
    private firstName: string;
    private lastName: string;
    private email: string;

    constructor(id: BigInt, firstName: string, lastName: string, email: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    getId(): BigInt {
        return this.id;
    }

    setId(id: BigInt): void {
        this.id = id;
    }

    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }
}
