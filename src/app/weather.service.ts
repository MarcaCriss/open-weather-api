import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${environment.apiBase}?q=London,uk&APPID=${environment.apiKey}`);
  }
}
