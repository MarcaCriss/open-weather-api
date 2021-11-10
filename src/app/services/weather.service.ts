import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Data } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getData(city: string): Observable<Data> {
    return this.http.get<Data>(
      `${environment.apiBase}?q=${city}&APPID=${environment.apiKey}`
    );
  }
}
