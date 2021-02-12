import { DateCapacity } from "./DateCapacity";

export interface Drivein {
    city: string;
    county_id: string;
    county_name: string;
    id: string;
    region_name: string;
    street_name: string;
    street_number: string;
    title: string;
    latitude: string;
    longitude: string;

    times: DateCapacity[];
}