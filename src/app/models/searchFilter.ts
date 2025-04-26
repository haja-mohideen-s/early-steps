export interface SearchFilter {
    centre_code: PropertyFilter;
}

export interface PropertyFilter {
    type: string;
    value: string;
}
