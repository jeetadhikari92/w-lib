import { Store } from '../../w-sdk/store/store.service';
import { pluck, map, ignoreElements, filter, take } from 'rxjs/operators';
import { WeatherResponse } from '../../w-sdk/types/weather.response';
import { Weather } from '../types/weather.interface';
import { URLs, WeatherService } from '../../w-sdk';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WeatherDataService {

    constructor(
        private readonly store: Store,
        private readonly weatherService: WeatherService
    ) {}

    getWeather(city: string): Observable<Weather> {
        this.weatherService.getWeather(city).pipe(take(1)).subscribe();
        return this.store.select('cities', city).pipe(
            map((data: WeatherResponse) => {
                if(data) {
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
            }),
        )
    }

}