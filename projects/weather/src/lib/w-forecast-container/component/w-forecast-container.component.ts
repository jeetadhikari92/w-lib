import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from '../../w-forecast/types/forecast.interface';
import { Observable } from 'rxjs';
import { ForecastService } from '../../w-sdk/services/forecast.service';
import { ForecastDataService } from '../service/forecast-data.service';

@Component({
  selector: 'lib-w-forecast-container',
  templateUrl: './w-forecast-container.component.html',
  styleUrls: ['./w-forecast-container.component.css']
})
export class WForecastContainerComponent implements OnInit {

  @Input() city: string;
  @Input() vertical: boolean;
  @Input() limit: number;
  public forecastList$: Observable<Forecast>;
  
  constructor(
    private readonly forecastData: ForecastDataService
  ) { }

  /**
   * @description Fetching the mapped data from the store to render upon
   * initializaton
   */
  ngOnInit() {
    this.forecastList$ = this.forecastData.getForecast(this.city);
  }

}
