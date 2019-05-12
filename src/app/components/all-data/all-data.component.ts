import { Component, OnInit } from '@angular/core';
import { TestDataService } from 'src/app/services/test-data.service';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit {
  jsonData: any;

  constructor(private _testDataService: TestDataService) { }

  ngOnInit() {
    this._testDataService.getData().subscribe(response => {
      this.jsonData = response;
    })
  }

}
