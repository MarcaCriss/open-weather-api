import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Data } from './interfaces/weather.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'openWeatherApi';
  data$!: Observable<Data>;
  search = '';

  constructor(private weather: WeatherService) {}

  ngOnInit(): void {
    this.getData('Bolivia')
  }

  filter() {
    this.getData(this.search);
  }

  getData(city: string) {this.data$ = this.weather.getData(city);}

}
