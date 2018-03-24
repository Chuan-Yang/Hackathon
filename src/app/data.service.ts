import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import {Data} from './data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

  private thingSpeakTempUrl = 'https://api.thingspeak.com/channels/457675/feeds.json?api_key=LU2WLJ5R57J1IB8M&results=1';
  private thingSpeakHumiUrl = 'https://api.thingspeak.com/channels/457682/feeds.json?api_key=CG72IDT4E8E66LGN&results=1';

  constructor(private http: HttpClient) { }

  getTemperature() {
    return Observable.interval(1000)
      .flatMap((i) => this.http.get(this.thingSpeakTempUrl));
    // return this.http.get(this.thingSpeakTempUrl);
  }

  getHumidity() {
    return Observable.interval(1000)
      .flatMap((i) => this.http.get(this.thingSpeakHumiUrl));
    // return this.http.get(this.thingSpeakHumiUrl);
  }

}
