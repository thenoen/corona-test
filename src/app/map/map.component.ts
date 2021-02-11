import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data-service';
import { DateCapacity } from '../model/DateCapacity';
import { Drivein } from '../model/Drivein';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title = 'Angular Google Maps Example';

  // BB
  lat = 48.73946;
  lng = 19.15349;

  @Input()
  centers: Drivein[] = [];

  // private times: { id: string, capacity: DateCapacity[] } = {};

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  clickedMarker(a: any, drivein: Drivein) {
    console.log(a);
    // console.log(b);
    this.dataService.getDriveInTimes(drivein.id).subscribe(data => {
      drivein.times = data.payload;
    });
  }

  parseFloat = parseFloat
}
