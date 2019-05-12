import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataModel } from '../models/data.model';
const api_url = "https://jsonplaceholder.typicode.com/posts/";

@Injectable({
  providedIn: 'root'
})

export class TestDataService {

  constructor(private _httpClient: HttpClient) { }

  public getData(): Observable<any> {
    return this._httpClient.get(api_url).pipe(
      map(response => {
        return response;
      })
    );
  }
  requestDataFromMultipleSources(): Observable<DataModel[]> {
    let response1 = this._httpClient.get(api_url + "1").pipe(
      map(response => {
        return <DataModel>response;
      })
    );
    let response2 = this._httpClient.get(api_url + "3").pipe(
      map(response => {
        return <DataModel>response;
      })
    );
    let response3 = this._httpClient.get(api_url + "5").pipe(
      map(response => {
        return <DataModel>response;
      })
    );
    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    return forkJoin<DataModel>([response1, response2, response3]);
  }
}
