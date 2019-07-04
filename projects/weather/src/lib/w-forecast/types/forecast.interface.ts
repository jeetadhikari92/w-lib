export interface Forecast {
    city?: string;
    country?: string;
    list?: ForecastWeather[];
}

export interface ForecastWeather {
    time?: any;
    date?: any;
    wind?: number;
    weather?: string;
    temperature?: number;
    iconUrl?: string;
}

