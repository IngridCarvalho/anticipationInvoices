import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from "@angular/common/http";
import { Observable, throwError as observableThrowError } from "rxjs";
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

import { TokenService } from "../token/token.service";
import { UserService } from '../user/user.service';

const API = environment.apiUrl;

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    
    constructor(
        private tokenService: TokenService,
        private userService: UserService,
        private router: Router
    ) {}

    // each request http realize the intercept and clone the token and send for api
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent 
        | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
            
            // console.log(req.url, `${API}/person/login`);
            if (req.url == `${API}/person/login`) {
                return next.handle(req);
            }
       
            if(this.tokenService.hasToken()) {
                const token = this.tokenService.getToken();
                req = req.clone({
                    setHeaders: {
                        'x-access-token': token
                    }
                });
            }
            return next.handle(req)
                .pipe(
                    catchError(err => {
                        if(err.status === 401){
                            this.userService.logout();
                            this.router.navigate(['']);
                            return observableThrowError(err);
                        }
                    })
                )
            ;
    }
}