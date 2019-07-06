import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { URLs } from '../enums/url.enum';

export class WeatherInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const newUrl = URLs.HOST + req.url;
        let params = req.params.append('appid', '1092af71c0819d6f24d1b178827d1ac4');
        params = params.append('units', 'metric');
        const clone = req.clone({
          url: newUrl,
          params: params
        });
        return next.handle(clone).pipe(
            catchError(this.handleError) 
        );
    }

    handleError(error) {
        console.error(error);
        return throwError(error);
    }
}