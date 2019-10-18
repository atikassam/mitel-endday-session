import {Injectable} from "@angular/core";
import {Observable, Subject, Subscription } from "rxjs";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable()
export class HttpCallInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token')

    const modified_req = req.clone({
      headers: req.headers.set('Authorization', token || "none")
    });

    return next.handle(modified_req)
  }
}
