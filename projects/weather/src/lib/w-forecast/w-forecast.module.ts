import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WForecastComponent } from './component/w-forecast.component';

@NgModule({
  declarations: [
    WForecastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WForecastComponent
  ]
})
export class WForecastModule { }
