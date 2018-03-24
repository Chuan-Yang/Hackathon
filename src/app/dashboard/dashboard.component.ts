import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import {getTemplate} from 'codelyzer/util/ngQuery';

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
    this.humidity = 30.22;
    this.temperature = 50.22;
    this.tempBar = 30;
    this.humiBar = 20;
    this.reHumi = null;
    this.reTemp = null;

    // this.getHumidity();
    // this.getTemperature();
  }

  getHumidity() {
    this.dataService.getHumidity().subscribe(
      data => this.reHumi = JSON.parse(JSON.stringify(data))
    );
    if (this.reHumi && this.reHumi['feeds']) {
      console.log('Get humi');
      this.humidity = this.reHumi['feeds'][0].field1;
    }
    this.humiBar = 240 - this.humidity * 2.4;
  }

  getTemperature() {
    this.dataService.getTemperature().subscribe(
      data => this.reTemp = JSON.parse(JSON.stringify(data))
    );
    if (this.reTemp && this.reTemp['feeds']) {
      console.log('Get Temp');
      this.temperature = this.reTemp['feeds'][0].field1;
    }
    this.tempBar = 227 - this.temperature * 4.54;
  }

  update() {
    console.log('clicked');
    this.getHumidity();
    this.getTemperature();
  }

}
