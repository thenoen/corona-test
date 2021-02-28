import { Component, Input, OnInit } from '@angular/core';
import { DateCapacity } from '../model/DateCapacity';
import { Drivein } from '../model/Drivein';
import { DriveinTimesResponse } from '../model/DriveinTimesResponse';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {


  @Input()
  times?: DateCapacity[];

  constructor() { }

  ngOnInit(): void {
  }

}
