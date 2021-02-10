import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../data-service';
import { Drivein } from '../model/Drivein';
import { DriveinTimesResponse } from '../model/DriveinTimesResponse';

@Component({
  selector: 'app-testing-center',
  templateUrl: './testing-center.component.html',
  styleUrls: ['./testing-center.component.scss']
})
export class TestingCenterComponent implements OnChanges {

  @Input()
  driveIn?: Drivein;

  constructor(private http: HttpClient,
    private dataService: DataService) { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    this.dataService.getDriveInTimes(this.driveIn?.id)
      .subscribe((response: DriveinTimesResponse) => {
        // console.log(response.payload);
      },
        error => console.log('oops', error));
  }

  public toFloat(value: string): number {
    return parseFloat(value);
  }

  
}
