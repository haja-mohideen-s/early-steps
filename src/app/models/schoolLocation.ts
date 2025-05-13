import { GeoCoordinates } from "./address";

export interface SchoolLocation {
    centreName: string;
    centreCode: string;
    coordinates: GeoCoordinates;
}