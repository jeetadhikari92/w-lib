/**
 * WeatherInterceptor will intercept all the entry points of the api
 * for all kind of central handling.
 */

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

import { URLs } from "../enums/url.enum";
import { WeatherConfig } from "../types/config";

export class WeatherInterceptor implements HttpInterceptor {
  constructor(private config: WeatherConfig) {}

  /**
   * @description Modify the api request urls with host name. Append
   * authorization parameteres centrally. Also handling error for
   * all api calls centrally
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const prefix = req.url.split("/")[0];
    if (prefix === "@w") {
      const newUrl = URLs.HOST + req.url.substr(3);
      console.log(this.config);
      let params = req.params.append("appid", this.config.appId);
      params = params.append("units", this.config.unit);
      const clone = req.clone({
        url: newUrl,
        params: params
      });
      return next.handle(clone).pipe(catchError(this.handleError));
    }
    return next.handle(req);
  }

  /**
   * @description Handle all Http errors
   * @param error
   */
  handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error);
  }
}
