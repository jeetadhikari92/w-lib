import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "lib-w-city-container",
  templateUrl: "./w-city-container.component.html",
  styleUrls: ["./w-city-container.component.css"]
})
export class WCityContainerComponent implements OnInit {
  @Input() cities: string[];
  @Input() vertical: boolean;
  public cityList: string[];
  constructor() {}

  ngOnInit() {
    this.refreshCities(this.cities);
  }

  /**
   * @description This function will validate if the number of cities passed for
   * the weather container is less than 5. And render the UI if it satisfies.
   * @param cities
   */
  refreshCities(cities: string[]): void {
    if (cities.length > 5) {
      console.error("Maximum cities allowed is 5.");
    } else {
      this.cityList = [...cities];
    }
  }
}
