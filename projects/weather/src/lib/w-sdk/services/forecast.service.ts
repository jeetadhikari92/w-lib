import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { tap, map } from 'rxjs/operators';
import { ForecaseResponse } from '../types/forecast.response';
import { Forecast, ForecastWeather } from '../../w-forecast';
import { WeatherResponse } from '../types/weather.response';
import { Store } from '../store/store.service';

@Injectable({
    providedIn: 'root'
})
export class ForecastService {

    constructor(
        private readonly http: HttpClient,
        private readonly store: Store
    ) {}

    getForecast(city: string) {
        let params = new HttpParams().append('q', city);
        params = params.append('cnt', '8');
        return this.http.get('forecast', {params: params}).pipe(
            tap((resp: WeatherResponse) => this.store.set('forecast', resp))
        );
    }
}