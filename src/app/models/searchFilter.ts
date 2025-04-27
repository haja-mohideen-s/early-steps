export interface SearchFilter {
    centre_code?: PropertyFilter;
    centre_name?: PropertyFilter;
    centre_address?: PropertyFilter;
}

export interface PropertyFilter {
    type: string;
    value: string;
}
