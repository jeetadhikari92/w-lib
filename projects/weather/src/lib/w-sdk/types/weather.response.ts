export interface WeatherResponse {
    coord: Coordinates;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Cloud;
    dt: Date;
    dt_txt: string;
    sys: System;
    timezone: number;
    id: number;
    name: string;
    cod: number
}

export interface Coordinates {
    lon?: number;
    lat?: number;
}

export interface Weather {
    id?: number;
    main?: string;
    description?: string;
    icon?: string;
}

export interface Main {
    temp?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
    sea_level?: number;
    grnd_level?: number;
    humidity?: number;
    temp_kf?: number;
}

export interface Wind {
    speed?: number;
    degree?: number;
}

export interface Cloud {
    all?: number;
}

export interface System {
    type?: number;
    id?: number;
    message?: number;
    country?: string;
    sunrise?: number;
    sunset?: number;
    pod?: string;
}