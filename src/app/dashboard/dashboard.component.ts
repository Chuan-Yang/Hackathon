import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  humidity: string;
  temperature: string;
  re: Observable<JSON>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.humidity = '12';
    this.temperature = '50';
  }

  getHumidity(): string {
    return this.humidity + 'px';
  }

  getTemperature(): string {
    this.dataService.getTemperature();
    return this.temperature + 'px';
  }

}
