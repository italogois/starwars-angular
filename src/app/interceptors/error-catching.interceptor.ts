import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { Observable, throwError } from 'rxjs'
import { catchError, finalize, retry, tap } from 'rxjs/operators'
import { LoadingService } from '../service/loading.service'

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {
  constructor(
    private readonly toastrService: ToastrService,
    private readonly loadingService: LoadingService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      tap(() => this.loadingService.updateLoadingState(true)),
      catchError((error: HttpErrorResponse) => {
        let errorMsg = ''

        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`
        } else {
          errorMsg = `Error ${error.status} -  ${error.message}`
        }

        this.toastrService.error(errorMsg)

        return throwError(() => new Error(errorMsg))
      }),
      finalize(() => this.loadingService.updateLoadingState(false))
    )
  }
}
