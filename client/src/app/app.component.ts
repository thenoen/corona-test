import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drivein } from './model/Drivein';
import { DataService } from './data-service';
import { NgbActiveModal, NgbModal, NgbModalConfig, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { LoadingProgressComponent } from './loading-progress/loading-progress.component';
import { SearchPipe } from './search.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SearchPipe]
})
export class AppComponent implements OnInit {

  @Input()
  searchInput: string = "";

  driveInsCount: number = 0;
  driveIns: Drivein[] = [];

  constructor(private http: HttpClient,
    private dataService: DataService,
    private modalConfig: NgbModalConfig,
    private modalService: NgbModal,
    private searchPipe: SearchPipe) {

    this.modalConfig.backdrop = 'static';
    this.modalConfig.keyboard = false;
  }

  ngOnInit() {
    this.openLoadingProgress();
    this.dataService.getWorkerTest().subscribe(response => {
      console.log(response);
    });

    this.dataService.getDriveIns().subscribe(response => {

      if (response === null) {
        this.closeLoadingProgress();
        return;
      }

      console.log(response.payload);
      this.driveIns = response.payload;
      this.driveInsCount = response.payload.length;
      new Promise(resolve => setTimeout(resolve, 200))
        .then(() => this.closeLoadingProgress());
    }, (error) => {
      console.log(error);
      this.closeLoadingProgress();
    });
  }

  valueChange(event: any): void {
    console.log("Changes: " + event.target.value);
    console.log("new value: "  + event.key);
    this.driveInsCount = this.searchPipe.transform(this.driveIns, event.target.value ).length
  }

  private modalRef: any;

  openLoadingProgress() {
    this.modalRef = this.modalService.open(LoadingProgressComponent);
    // this.modalRef.componentInstance.name = 'World';
    // modalRef.close();
  }

  closeLoadingProgress() {
    // this.modalService.dismissAll();
    this.modalRef.close();
  }

}
