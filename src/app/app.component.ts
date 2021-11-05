import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'openWeatherApi';
  constructor(private weather: WeatherService) {}

  ngOnInit(): void {
    this.weather.getData().subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

}
