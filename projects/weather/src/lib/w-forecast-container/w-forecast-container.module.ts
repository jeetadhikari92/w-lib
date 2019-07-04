import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WForecastContainerComponent } from './component/w-forecast-container.component';
import { WForecastModule } from '../w-forecast/w-forecast.module';

@NgModule({
  declarations: [
    WForecastContainerComponent
  ],
  imports: [
    WForecastModule,
    CommonModule
  ],
  exports: [
    WForecastContainerComponent
  ]
})
export class WForecastContainerModule { }
