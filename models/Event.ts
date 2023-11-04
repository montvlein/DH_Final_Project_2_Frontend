import { Category } from "./Category";
import { EventDateTime } from "./DateTime";
import { Venue } from "./Venue";

export class Event {
    private id: BigInt;
    private dateList: EventDateTime[];
    private name: string;
    private miniImageUrl: string;
    private bannerImageUrl: string;
    private detailImageUrl: string;
    private description: string;
    private category: Category;
    private venue: Venue;

    constructor(
        id: BigInt,
        dateList: EventDateTime[],
        name: string,
        miniImageUrl: string,
        bannerImageUrl: string,
        detailImageUrl: string,
        description: string,
        category: Category,
        venue: Venue
    ) {
        this.id = id;
        this.dateList = dateList;
        this.name = name;
        this.miniImageUrl = miniImageUrl;
        this.bannerImageUrl = bannerImageUrl;
        this.detailImageUrl = detailImageUrl;
        this.description = description;
        this.category = category;
        this.venue = venue;
    }

    getId(): BigInt {
        return this.id;
    }

    setId(id: BigInt): void {
        this.id = id;
    }

    getDateList(): EventDateTime[] {
        return this.dateList;
    }

    setDateList(dateList: EventDateTime[]): void {
        this.dateList = dateList;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getMiniImageUrl(): string {
        return this.miniImageUrl;
    }

    setMiniImageUrl(miniImageUrl: string): void {
        this.miniImageUrl = miniImageUrl;
    }

    getBannerImageUrl(): string {
        return this.bannerImageUrl;
    }

    setBannerImageUrl(bannerImageUrl: string): void {
        this.bannerImageUrl = bannerImageUrl;
    }

    getDetailImageUrl(): string {
        return this.detailImageUrl;
    }

    setDetailImageUrl(detailImageUrl: string): void {
        this.detailImageUrl = detailImageUrl;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    getCategory(): Category {
        return this.category;
    }

    setCategory(category: Category): void {
        this.category = category;
    }

    getVenue(): Venue {
        return this.venue;
    }

    setVenue(venue: Venue): void {
        this.venue = venue;
    }
}
