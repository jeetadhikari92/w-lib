import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../types/weather.interface';
import { WeatherDataService } from '../service/weather-data.service';

@Component({
  selector: 'lib-w-city',
  templateUrl: './w-city.component.html',
  styleUrls: ['./w-city.component.css']
})
export class WCityComponent implements OnInit {

  @Input() city: string;
  @Input() selected: boolean;
  weatherData$: Observable<Weather>;

  constructor(
    private weatherData: WeatherDataService
  ) {}

  /**
   * @description Setting Amsterdam as default city if not passed from outside. 
   * And then fetching the mapped Weather data from the store for that city.
   * @return void; 
   */
  ngOnInit() {
    const city = this.city ? this.city : 'Amsterdam';
    this.weatherData$ = this.weatherData.getWeather(city);
  }

}
