/**
 * Forecast data service fetches data from the central data store
 * of this library. It maps the data according to the need of modules
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Store } from '../../w-sdk/store/store.service';
import { WeatherResponse } from '../../w-sdk/types/weather.response';
import { ForecastResponse, URLs } from '../../w-sdk';
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

    /**     
     * @description This function will initialize the http call for
     * a certain city. At the same time it returns the mapped forecast details.
     * @param city 
     * @return Observable<Forecast>
     */
    getForecast(city: string): Observable<Forecast> {
        this.weatherService.getForecast(city).pipe(take(1)).subscribe();
        return this.store.select('forecast', city).pipe(
            map((data: ForecastResponse) => {
                if(data) {
                    const finalResponse: Forecast = {};
                    const forecastList: ForecastWeather[] = data.list.map((weatherObj: WeatherResponse) => {
                        const weather: ForecastWeather = {
                            date: weatherObj.dt_txt.split(' ')[0],
                            temperature: weatherObj.main.temp,
                            time: weatherObj.dt_txt.split(' ')[1],
                            weather: weatherObj.weather[0].description,
                            wind: weatherObj.wind.speed,
                            iconUrl: URLs.IMG + weatherObj.weather[0].icon + '.png'
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