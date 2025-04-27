export interface SchoolFees {
    help: string;
    success: boolean;
    result: Result;
}

export interface Result {
    resource_id: string;
    fields: Field[];
    records: Record[];
    _links: Links;
    total: number;
}

export interface Links {
    start: string;
    next: string;
}

export interface Field {
    type: Type;
    id: string;
}

export enum Type {
    Int4 = "int4",
    Text = "text",
}

export interface Record {
    _id: number;
    centre_code: string;
    centre_name: string;
    class_of_licence: string;
    type_of_service: string;
    levels_offered: string;
    fees: string;
    type_of_citizenship: string;
    last_updated: string;
    remarks: string;
}

