export interface Address {
    place_id: number;
    licence: string;
    lat: number;
    lon: number;
    class: string;
    type: string;
    place_rank: number;
    importance: number;
    addresstype: string;
    name: string;
    display_name: string;
    boundingbox: string[];
}
