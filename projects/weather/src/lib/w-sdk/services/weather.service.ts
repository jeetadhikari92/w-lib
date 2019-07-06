import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { WeatherResponse } from '../types/weather.response';
import { Store } from '../store/store.service';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    constructor(
        private readonly http: HttpClient,
        private readonly store: Store
    ) {}

    getWeather(city: string) {
        const params = new HttpParams().append('q', city);
        return this.http.get('weather', {params: params}).pipe(
            tap((resp: WeatherResponse) => {
                this.store.setDeep('cities', city, resp);
            })
        );
    }
}