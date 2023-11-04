export class User {
    private id: BigInt;
    private firstName: string;
    private lastName: string;
    private email: string;
    private rol: string;
    private birthdate: Date;
    private phone: string;
    private documentType: string;
    private documentNumber: string;

    constructor(
        id: BigInt,
        firstName: string,
        lastName: string,
        email: string,
        rol: string,
        birthdate: Date,
        phone: string,
        documentType: string,
        documentNumber: string
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.rol = rol;
        this.birthdate = birthdate;
        this.phone = phone;
        this.documentType = documentType;
        this.documentNumber = documentNumber;
    }

    // Métodos Get
    getId(): BigInt {
        return this.id;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getEmail(): string {
        return this.email;
    }

    getRol(): string {
        return this.rol;
    }

    getBirthdate(): Date {
        return this.birthdate;
    }

    getPhone(): string {
        return this.phone;
    }

    getDocumentType(): string {
        return this.documentType;
    }

    getDocumentNumber(): string {
        return this.documentNumber;
    }

    // Métodos Set
    setId(id: BigInt): void {
        this.id = id;
    }

    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setRol(rol: string): void {
        this.rol = rol;
    }

    setBirthdate(birthdate: Date): void {
        this.birthdate = birthdate;
    }

    setPhone(phone: string): void {
        this.phone = phone;
    }

    setDocumentType(documentType: string): void {
        this.documentType = documentType;
    }

    setDocumentNumber(documentNumber: string): void {
        this.documentNumber = documentNumber;
    }
}
