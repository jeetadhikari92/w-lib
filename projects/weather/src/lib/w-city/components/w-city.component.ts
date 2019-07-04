import { Component, OnInit, Input } from '@angular/core';
import { CurrentWeatherService } from '../services/current-weather.service';
import { Observable } from 'rxjs';
import { Weather } from '../types/weather.interface';

@Component({
  selector: 'lib-w-city',
  templateUrl: './w-city.component.html',
  styleUrls: ['./w-city.component.css']
})
export class WCityComponent implements OnInit {

  @Input() city: string;
  @Input() selected: boolean;
  iconUrl: string;
  weatherData$: Observable<Weather>;

  constructor(
    private currentWeather: CurrentWeatherService
  ) {}

  /**
   * @description Constructing the icon url for each city, when components
   * are initialized.
   */
  ngOnInit() {
    const city = this.city ? this.city : 'Amsterdam';
    this.weatherData$ = this.currentWeather.getWeather(city);
  }

}
