import { CurrentWeather } from '../../w-city/types/current-weather.response';

export interface ForecaseResponse {
    city?: City;
    cod?: number;
    message?: number;
    cnt?: number;
    list?: CurrentWeather[];
}

export interface City {
    id: string;
    name: string;
    country: string;
    timazone: number;
    coord: {
        lat: number;
        long: number;
    }
}