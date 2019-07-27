# @storm-pkg/weather

<p align="left">
    <img src="https://raw.githubusercontent.com/jeetadhikari92/w-lib/master/projects/docs/assets/w.png" width="200" height="200">
</p>

Collection of Weather widgets and services to easily build weather application in minutes.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Develop](#development)


## Installation

First you need to install the npm module:

```sh
npm install @storm-pkg/weather
```

Choose the version corresponding to your Angular version:

 Angular     | @storm-pkg/weather
 ----------- | ------------------- 
 8           | 1.0.10 
 7           | 1.0.10         


## Usage

#### 0. Get a free OpenWeather Api key

Signup by clicking the link and get a free API key which is required
to run this library. 
https://home.openweathermap.org/users/sign_up

#### 1. Provide the `WeatherIntercepter`:

Finally, you can use @storm-pkg/weather in your Angular project. You have to import `WeatherModule` in the root NgModule of your application as shown below and enter your
configuration.

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {WeatherModule} from '@storm-pkg/weather';

@NgModule({
    imports: [
        BrowserModule,
        WeatherModule.withConfig({
            appId: <Your App Id from Open Weather APIs>,
            unit: <Your choice of unit. metric or imperial>
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

This will handle all the Weather related apis centrally and add the Application Id that you provide to each apis.
It will also take care of error handling.

## Development

#### 1. Using the WCity:

This module allows you to render a single Weather widget for a city.

##### Import the module in your NgModule
To use the WCityWidget you need to import the WCityodule. Do as follows:

```ts
import {WCityModule} from '@storm-pkg/weather';

@NgModule({
    ...
    imports: [
        ...
        WCityModule
    ],
    ...
})
export class AppModule { }
```

##### Add the selector lib-w-city
- After the module is registered you can use the WCity widget selector in your component template and pass a city name
like this
```
<lib-w-city [city]="'Paris'"></lib-w-city>
```

<p align="left">
    <img src="https://raw.githubusercontent.com/jeetadhikari92/w-lib/master/projects/docs/assets/WCity/sample1.PNG" width="300" height="200"> 
</p>

- We can also pass a selected boolean value to display if the particular city is selected.
```
<lib-w-city [city]="'Amsterdam'" [selected]="true"></lib-w-city>
```

<p align="left">
    <img src="https://raw.githubusercontent.com/jeetadhikari92/w-lib/master/projects/docs/assets/WCity/sample2.PNG"  width="300" height="200">
</p>

- We can also write proper styles to change the look of the widgets for example
```
<lib-w-city 
    style="background: #2ec7c0; color: white; border-radius: 5px"
    [city]="'Paris'">
</lib-w-city>
```

<p align="left">
    <img src="https://raw.githubusercontent.com/jeetadhikari92/w-lib/master/projects/docs/assets/WCity/sample3.PNG"  width="300" height="230">
</p>
