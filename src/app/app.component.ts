import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherservice: WeatherService) {}
  weatherData?: WeatherData;
  ngOnInit(): void {
    this.weatherservice.getWeatherData('Surat').subscribe({
      next: (response) => {
        console.log('response', response);
        this.weatherData = response;
      },
    });
  }
}
