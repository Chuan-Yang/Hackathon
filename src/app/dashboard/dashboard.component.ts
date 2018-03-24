import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  humidity: string;
  temperature: string;

  constructor() { }

  ngOnInit() {
    this.humidity = '12';
    this.temperature = '50';
  }

  getHumidity(): string {
    return this.humidity + 'px';
  }

  getTemperature(): string {
    return this.temperature + 'px';
  }

}
