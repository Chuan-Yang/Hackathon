import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Data} from './data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

  private thingSpeakTempUrl = 'https://api.thingspeak.com/channels/457675/feeds.json?api_key=LU2WLJ5R57J1IB8M&results=1';
  private a: Observable<Data>;

  constructor(private http: HttpClient) { }

  getTemperature(): Observable<Data> {
    this.a = this.http.get<Data>(this.thingSpeakTempUrl);
    return this.a;
  }

}
