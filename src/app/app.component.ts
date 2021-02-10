import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drivein } from './model/Drivein';
import { DataService } from './data-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public searchInput: string = "";

  driveInsCount: number = 0;
  driveIns: Drivein[] = [];

  constructor(private http: HttpClient,
              private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDriveIns().subscribe(response => {
          console.log(response.payload);
          this.driveIns = response.payload;
          this.driveInsCount = response.payload.length;
    });
  }

  applyFilter(text: any) {
    console.log(text);
  }
}
