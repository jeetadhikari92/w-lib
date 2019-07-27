/**
 * Weather data service fetches data from the central data store
 * of this library. It maps the data according to the need of modules
 */

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";

import { Store } from "../../w-sdk/store/store.service";
import { URLs, WeatherService } from "../../w-sdk";
import { WeatherResponse } from "../../w-sdk/types/weather.response";
import { Weather } from "../types/weather.interface";

@Injectable({
  providedIn: "root"
})
export class WeatherDataService {
  constructor(
    private readonly store: Store,
    private readonly weatherService: WeatherService
  ) {}

  /**
   * @description This function will initialize the http call for
   * a certain city. At the same time it returns the mapped weather details.
   * @param city
   * @returns Observable<Weather>
   */
  getWeather(city: string): Observable<Weather> {
    this.weatherService
      .getWeather(city)
      .pipe(take(1))
      .subscribe();
    return this.store.select("cities", city).pipe(
      map((data: WeatherResponse) => {
        if (data) {
          const resp: Weather = {};
          resp.city = data.name;
          resp.countryCode = data.sys.country;
          resp.temperature = data.main.temp;
          resp.weather = data.weather[0].description;
          resp.wind = data.wind.speed;
          resp.icon = URLs.IMG + data.weather[0].icon + ".png";
          return resp;
        }
        return null;
      })
    );
  }
}
