import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import {Observable} from 'rxjs';

import {ToastrService} from 'ngx-toastr';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(public router: Router,
              public toastr: ToastrService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap((res: HttpResponse<any>) => {

    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        const message = err.error.message;

        // Sequelize db connection error
        if (err.error.hasOwnProperty('db_error')) {
          this.toastr.error(err.error.db_error, 'Unable to connect to database');

          // Server connection error
        } else if (err.status === 200 || err.status === 0 || err.error.hasOwnProperty('conn_error') && err.status !== 304) {
          this.toastr.error('Please check server connection.', 'Unable to connect to server');
        } else if (err.error.hasOwnProperty('main')) {
          this.toastr.error(err.error.msg, err.error.main);
        } else {
          if (err.error.hasOwnProperty('msg')) {
            if (err.status === 444) {
              // this.common.showPrice = false;
            }
            this.toastr.error('', err.error.msg);
          } else if (message) {
            this.toastr.error(message.replace(/<(.|\n)*?>/g, ''));
          }
        }

      }
    }));
  }
}
