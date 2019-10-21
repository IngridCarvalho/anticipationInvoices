import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as jtw_decode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({ providedIn: 'root' })

export class UserService{

    user: User;

    constructor(private tokenService: TokenService){
        this.tokenService.hasToken() &&
        this.decodeAndNotify();
    }

    setToken(token: string){
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    private decodeAndNotify(){
        const token = this.tokenService.getToken();
        this.user = jtw_decode(token) as User;
    }

    logout(){
        this.tokenService.removeToken();
    }

    isLogged(){
        return this.tokenService.hasToken();
    }
}