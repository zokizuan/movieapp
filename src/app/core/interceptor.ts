import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddKeyInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(httpRequest)
    const ApiwithKey = httpRequest.clone({ url: `${httpRequest.url}&api_key=c396ce4ccf1636a115618f3a5570d9e5` });
    return next.handle(ApiwithKey);
  }
}