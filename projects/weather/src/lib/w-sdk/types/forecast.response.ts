import { WeatherResponse, Coordinates } from './weather.response';

export interface ForecastResponse {
    city?: City;
    cod?: number;
    message?: number;
    cnt?: number;
    list?: WeatherResponse[];
}

export interface City {
    id: string;
    name: string;
    country: string;
    timazone: number;
    coord: Coordinates;
}