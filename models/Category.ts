export class Category {
    private id: BigInt;
    private imageUrl: string;
    private description: string;

    constructor(id: BigInt, imageUrl: string, description: string) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    getId(): BigInt {
        return this.id;
    }

    setId(id: BigInt): void {
        this.id = id;
    }

    getImageUrl(): string {
        return this.imageUrl;
    }

    setImageUrl(imageUrl: string): void {
        this.imageUrl = imageUrl;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }
}
