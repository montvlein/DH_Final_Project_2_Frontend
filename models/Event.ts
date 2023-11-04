import { Category } from "./Category";
import { EventDateTime } from "./DateTime";
import { Venue } from "./Venue";

export interface Evento {
    id: number;
    dateList: EventDateTime[];
    name: string;
    miniImageUrl: string;
    bannerImageUrl: string;
    detailImageUrl: string;
    description?: string;
    category: Category;
    venue: Venue;
}
