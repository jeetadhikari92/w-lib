import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { CurrentWeather } from '../types/current-weather.response';
import { Weather } from '../types/weather.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CurrentWeatherService {

    constructor(
        private http: HttpClient
    ) {}

    getWeather(city: string): Observable<Weather> {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q='
        + city
        + '&units=metric&appid=1092af71c0819d6f24d1b178827d1ac4';
        return this.http.get(url).pipe(
            map((data: CurrentWeather) => {
                const resp: Weather = {};
                resp.cityName = data.name;
                resp.countryCode = data.sys.country;
                resp.temperature = data.main.temp;
                resp.weather = data.weather[0].description;
                resp.wind = data.wind.speed;
                resp.icon = "https://openweathermap.org/img/w/"+ data.weather[0].icon + ".png";
                return resp;
            })
        );
    }
}