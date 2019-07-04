import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  WCityModule, 
  WCityContainerModule, 
  WForecastModule,
  WForecastContainerModule
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
