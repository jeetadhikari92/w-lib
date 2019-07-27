import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WCityContainerComponent } from "./components/w-city-container.component";
import { WCityModule } from "../w-city/w-city.module";

@NgModule({
  declarations: [WCityContainerComponent],
  imports: [CommonModule, WCityModule],
  exports: [WCityContainerComponent]
})
export class WCityContainerModule {}
