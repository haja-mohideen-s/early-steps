export interface School {
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
    limit: number;
    filters: string;
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
    tp_code: string;
    centre_code: string;
    centre_name: string;
    organisation_code: string;
    organisation_description: string;
    service_model: string;
    centre_contact_no: string;
    centre_email_address: string;
    centre_address: string;
    postal_code: string;
    centre_website: string;
    infant_vacancy_current_month: string;
    infant_vacancy_next_month: string;
    infant_vacancy_third_month: string;
    infant_vacancy_fourth_month: string;
    infant_vacancy_fifth_month: string;
    infant_vacancy_sixth_month: string;
    infant_vacancy_seventh_month: string;
    pg_vacancy_current_month: string;
    pg_vacancy_next_month: string;
    pg_vacancy_third_month: string;
    pg_vacancy_fourth_month: string;
    pg_vacancy_fifth_month: string;
    pg_vacancy_sixth_month: string;
    pg_vacancy_seventh_month: string;
    n1_vacancy_current_month: string;
    n1_vacancy_next_month: string;
    n1_vacancy_third_month: string;
    n1_vacancy_fourth_month: string;
    n1_vacancy_fifth_month: string;
    n1_vacancy_sixth_month: string;
    n1_vacancy_seventh_month: string;
    n2_vacancy_current_month: string;
    n2_vacancy_next_month: string;
    n2_vacancy_third_month: string;
    n2_vacancy_fourth_month: string;
    n2_vacancy_fifth_month: string;
    n2_vacancy_sixth_month: string;
    n2_vacancy_seventh_month: string;
    k1_vacancy_current_month: string;
    k1_vacancy_next_month: string;
    k1_vacancy_third_month: string;
    k1_vacancy_fourth_month: string;
    k1_vacancy_fifth_month: string;
    k1_vacancy_sixth_month: string;
    k1_vacancy_seventh_month: string;
    k2_vacancy_current_month: string;
    k2_vacancy_next_month: string;
    k2_vacancy_third_month: string;
    k2_vacancy_fourth_month: string;
    k2_vacancy_fifth_month: string;
    k2_vacancy_sixth_month: string;
    k2_vacancy_seventh_month: string;
    food_offered: string;
    second_languages_offered: string;
    spark_certified: string;
    weekday_full_day: string;
    saturday: string;
    scheme_type: string;
    extended_operating_hours: string;
    provision_of_transport: string;
    government_subsidy: string;
    gst_regisration: string;
    last_updated: string;
    remarks: string;
}
