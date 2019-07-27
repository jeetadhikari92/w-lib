import { NgModule, ModuleWithProviders } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { WeatherInterceptor } from "./w-sdk";
import { WeatherConfig } from "./w-sdk/types/config";

@NgModule()
export class WeatherModule {
  static withConfig(config: WeatherConfig): ModuleWithProviders {
    return {
      ngModule: WeatherModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useValue: new WeatherInterceptor(config),
          multi: true,
          deps: [HttpClient]
        }
      ]
    };
  }
}
