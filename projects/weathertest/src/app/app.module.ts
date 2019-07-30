import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { 
  WeatherModule,
  WCityModule, 
  WCityContainerModule, 
  WForecastModule,
  WForecastContainerModule,
  WeatherInterceptor
} from 'weather';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeatherModule.withConfig({
      appId: '1092af71c0819d6f24d1b178827d1ac4',
      unit: 'metric'
    }),
    WCityModule,
    WCityContainerModule,
    WForecastModule,
    WForecastContainerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
