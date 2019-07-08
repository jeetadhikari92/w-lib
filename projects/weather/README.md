# @storm-pkg/weather

<p align="left">
    <img src="https://github.com/jeetadhikari92/w-lib/blob/master/projects/docs/assets/w.png" width="200" height="200">
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
 7           | 1.0.0             


## Usage

#### 1. Provide the `WeatherIntercepter`:

Finally, you can use @storm-pkg/weather in your Angular project. You have to import `WeatherIntercepter` in the root NgModule of your application as shown below.

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {WeatherInterceptor} from '@storm-pkg/weather';

@NgModule({
    imports: [
        BrowserModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: WeatherInterceptor,
            multi: true,
            deps: [HttpClient]
        }
    ]
    bootstrap: [AppComponent]
})
export class AppModule { }
```

This will handle all the Weather related apis centrally and add the Application Id to each apis.
It will also take care of error handling.

##### Add Assets to your application :

This library comes with some assets which are not included in the library and has to be included manually.
- Go to the ```projects/weathertest/assets``` and copy the ```weather``` folder which contains the assets.
- Paste the same folder inside your application ```src/assets``` folder as shown below.

<p align="center">
    <img src="https://github.com/jeetadhikari92/w-lib/blob/master/projects/docs/assets/assets-folder.PNG">
</p>


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
    <img src="https://github.com/jeetadhikari92/w-lib/blob/master/projects/docs/assets/WCity/sample1.PNG" width="300" height="200"> 
</p>

- We can also pass a selected boolean value to display if the particular city is selected.
```
<lib-w-city [city]="'Amsterdam'" [selected]="true"></lib-w-city>
```

<p align="left">
    <img src="https://github.com/jeetadhikari92/w-lib/blob/master/projects/docs/assets/WCity/sample2.PNG"  width="300" height="200">
</p>

- We can also write proper styles to change the look of the widgets for example
```
<lib-w-city 
    style="background: #2ec7c0; color: white; border-radius: 5px"
    [city]="'Paris'">
</lib-w-city>
```

<p align="left">
    <img src="https://github.com/jeetadhikari92/w-lib/blob/master/projects/docs/assets/WCity/sample3.PNG"  width="300" height="230">
</p>
