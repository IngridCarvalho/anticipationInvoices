import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import { UserService } from '../user/user.service';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  authenticate(login: string, password: string) {

    return this.http
      .post(
        API + 'logon', 
        { login, password }, 
        { observe: 'response'} 
      )
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.userService.setToken(authToken);
        console.log(`User ${login} authenticated with token ${authToken}`);
      }));
  }
}