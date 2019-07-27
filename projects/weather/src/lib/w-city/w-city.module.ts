import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WCityComponent } from "./components/w-city.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [WCityComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [WCityComponent]
})
export class WCityModule {}
