/**
 * ForecastService is used to connect with external backend data
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { WeatherResponse } from '../types/weather.response';
import { Store } from '../store/store.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    constructor(
        private readonly http: HttpClient,
        private readonly store: Store
    ) {}

    /**
     * @description This function will fetch weather data of a particular city
     * and store them in a central store using the Store service.
     * @param city
     * @returns Observable<WeatherResponse>
     */
    getWeather(city: string): Observable<WeatherResponse> {
        const params = new HttpParams().append('q', city);
        return this.http.get('@w/weather', {params: params}).pipe(
            tap((resp: WeatherResponse) => {
                this.store.setDeep('cities', city, resp);
            })
        );
    }
}