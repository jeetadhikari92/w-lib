/**
 * ForecastService is used to connect with external backend data
 */

import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { WeatherResponse } from "../types/weather.response";
import { Store } from "../store/store.service";
import { ForecastResponse } from "../types/forecast.response";

@Injectable({
  providedIn: "root"
})
export class ForecastService {
  constructor(
    private readonly http: HttpClient,
    private readonly store: Store
  ) {}

  /**
   * @description This function will fetch forecast data of a particular city
   * and store them in a central store using the Store service.
   * @param city
   * @returns Observable<ForecastResponse>
   */
  getForecast(city: string): Observable<ForecastResponse> {
    let params = new HttpParams().append("q", city);
    params = params.append("cnt", "8");
    return this.http
      .get("@w/forecast", { params: params })
      .pipe(
        tap((resp: WeatherResponse) =>
          this.store.setDeep("forecast", city, resp)
        )
      );
  }
}
