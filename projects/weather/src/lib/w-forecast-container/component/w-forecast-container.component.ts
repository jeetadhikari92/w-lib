import { Component, OnInit, Input } from '@angular/core';
import { ForecastService } from '../services/forecast.service';
import { Forecast } from '../../w-forecast/types/forecast.interface';
import { Observable } from 'rxjs';

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
    private readonly forecastService: ForecastService
  ) { }

  ngOnInit() {
    this.forecastList$ = this.forecastService.getForecast(this.city);
  }

}
