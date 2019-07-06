import { Store } from '../../w-sdk/store/store.service';
import { map, take } from 'rxjs/operators';
import { WeatherResponse } from '../../w-sdk/types/weather.response';
import { ForecaseResponse } from '../../w-sdk';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Forecast, ForecastWeather } from '../../w-forecast/types/forecast.interface';
import { ForecastService } from '../../w-sdk/services/forecast.service';

@Injectable({
    providedIn: 'root'
})
export class ForecastDataService {

    constructor(
        private readonly store: Store,
        private readonly weatherService: ForecastService
    ) {}

    getForecast(city: string): Observable<Forecast> {
        this.weatherService.getForecast(city).pipe(take(1)).subscribe();
        return this.store.select('forecast').pipe(
            map((data: ForecaseResponse) => {
                if(data) {
                    const finalResponse: Forecast = {};
                    const forecastList: ForecastWeather[] = data.list.map((weatherObj: WeatherResponse) => {
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
                }
                return null;
            })
        )
    }

}