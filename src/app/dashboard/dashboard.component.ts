import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import {getTemplate} from 'codelyzer/util/ngQuery';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  humidity: number;
  temperature: number;
  reTemp: JSON;
  reHumi: JSON;
  tempBar: number;
  humiBar: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.humidity = 0.00;
    this.temperature = 0.00;
    this.tempBar = 0;
    this.humiBar = 0;
    this.reHumi = null;
    this.reTemp = null;

    // this.getHumidity();
    // this.getTemperature();
    this.dataService.getHumidity().subscribe((res) => this.getHumidity(res));
    this.dataService.getTemperature().subscribe((res) => this.getTemperature(res));
  }

  getHumidity(data: Object) {
    // this.dataService.getHumidity().subscribe(
    //   data => this.reHumi = JSON.parse(JSON.stringify(data))
    // );
    this.reHumi = JSON.parse(JSON.stringify(data));

    if (this.reHumi && this.reHumi['feeds']) {
      console.log('Get humi');
      this.humidity = this.reHumi['feeds'][0].field1;
    }
    this.humiBar = 240 - this.humidity * 2.4;
  }

  getTemperature(data: Object) {
    // this.dataService.getTemperature().subscribe(
    //   data => this.reTemp = JSON.parse(JSON.stringify(data))
    // );
    this.reTemp = JSON.parse(JSON.stringify(data));

    if (this.reTemp && this.reTemp['feeds']) {
      this.temperature = this.reTemp['feeds'][0].field1;
      console.log('Get Temp: ' + this.temperature + '°C');
    }
    this.tempBar = 227 - this.temperature * 4.54;
  }

}
