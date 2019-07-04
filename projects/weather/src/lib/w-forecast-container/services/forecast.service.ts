import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forecast, ForecastWeather } from '../../w-forecast/types/forecast.interface';
import { map } from 'rxjs/operators';
import { ForecaseResponse } from '../types/forecast.response';
import { CurrentWeather } from '../../w-city/types/current-weather.response';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ForecastService {
    constructor(
        private readonly http: HttpClient
    ) {}

    getForecast(city: string): Observable<Forecast> {
        const url = 'https://api.openweathermap.org/data/2.5/forecast?q='
        + city
        + '&units=metric&cnt=8&appid=1092af71c0819d6f24d1b178827d1ac4';
        return this.http.get(url).pipe(
            map((data: ForecaseResponse) => {
                const finalResponse: Forecast = {};
                const forecastList: ForecastWeather[] = data.list.map((weatherObj: CurrentWeather) => {
                    const weather: ForecastWeather = {
                        date: weatherObj.dt_txt.split(' ')[0],
                        temperature: weatherObj.main.temp,
                        time: weatherObj.dt_txt.split(' ')[1],
                        weather: weatherObj.weather[0].description,
                        wind: weatherObj.wind.speed,
                        iconUrl: 'https://openweathermap.org/img/w/' + weatherObj.weather[0].icon + '.png'
                    }
                    return weather;
                });
                finalResponse.city = data.city.name;
                finalResponse.country = data.city.country;
                finalResponse.list = forecastList;
                return finalResponse;
            })
        );
    }
}