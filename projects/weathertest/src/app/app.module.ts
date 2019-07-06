import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { 
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
    WCityModule,
    WCityContainerModule,
    WForecastModule,
    WForecastContainerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WeatherInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
