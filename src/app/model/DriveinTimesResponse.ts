import { DateCapacity } from "./DateCapacity";

export interface DriveinTimesResponse {
    error_count: number;
    errors: any[];
    info: any[];
    warning_count: number;
    warnings: any[]
    payload: DateCapacity[];
    payload_count: number;
}