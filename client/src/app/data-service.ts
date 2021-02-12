import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DriveinsResponse } from "./model/DriveinsReponse";
import { DriveinTimesResponse } from "./model/DriveinTimesResponse";

@Injectable()
export class DataService {


    constructor(private http: HttpClient) { }

    getDriveIns(): Observable<DriveinsResponse> {
        // const url: string = "assets/MockedDriveinsResponse.json";
        // const url = "https://mojeezdravie.nczisk.sk/api/v1/web/get_driveins";
        const url = `/data/driveins`;
        return this.http.get<DriveinsResponse>(url);
    }

    getDriveInTimes(id: string|undefined): Observable<DriveinTimesResponse> {
        // const url: string = "assets/MockedDriveinTimesResponse.json";
        // return this.http.get<DriveinTimesResponse>(url);
        // const url = "https://mojeezdravie.nczisk.sk/api/v1/web/validate_drivein_times";
        const url = `/data/drivein-times?id=${id}`;
        return this.http.get<DriveinTimesResponse>(url);
    }

    getWorkerTest(): Observable<string> {
        const url = `/data/worker-test`;
        return this.http.get<string>(url);
    }
}