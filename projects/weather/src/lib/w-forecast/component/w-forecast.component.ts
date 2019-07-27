import { Component, OnInit, Input } from "@angular/core";
import { ForecastWeather } from "../types/forecast.interface";

@Component({
  selector: "lib-w-forecast",
  templateUrl: "./w-forecast.component.html",
  styleUrls: ["./w-forecast.component.css"]
})
export class WForecastComponent implements OnInit {
  @Input() forecast: ForecastWeather;

  constructor() {}

  ngOnInit() {}
}
