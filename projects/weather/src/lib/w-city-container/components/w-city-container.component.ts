import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-w-city-container',
  templateUrl: './w-city-container.component.html',
  styleUrls: ['./w-city-container.component.css']
})
export class WCityContainerComponent implements OnInit {

  @Input() cities: string[];
  @Input() vertical: boolean; 
  public cityList: string[];
  constructor() { }

  ngOnInit() {
    this.refreshCities(this.cities);
  }

  refreshCities(cities: string[]) {
    if(cities.length > 5) {
      console.error('Maximum cities allowed is 5.');
    } else { 
      this.cityList = [...cities];
    }
  }

}
