import { Component, OnInit } from '@angular/core';
import { TestDataService } from 'src/app/services/test-data.service';
import { DataModel } from 'src/app/models/data.model';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
  //,providers:[TestDataService]
})
export class DataListComponent implements OnInit {
  jsonData: any;
  dataList: DataModel[];

  constructor(private _testDataService: TestDataService) { }

  ngOnInit() {
    this._testDataService.getData().subscribe(response => {
      this.jsonData = response;
    })


    this._testDataService.requestDataFromMultipleSources().subscribe(data => {
      this.dataList = data;
    })
  }

}
