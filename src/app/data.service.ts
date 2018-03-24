import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

  private heroesUrl = 'https://api.thingspeak.com/channels/457675/feeds.json?api_key=LU2WLJ5R57J1IB8M&results=1';

  constructor(private http: HttpClient) { }

  getTemperature (): Observable<number> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

}
