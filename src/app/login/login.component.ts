import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth/auth.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{

    loginForm: FormGroup;
    @Input() loginError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginUser(){
    const login = this.loginForm.get('login').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(login, password)
      .subscribe(
        () => this.router.navigate(['home']),
        err => {
          console.log(err);
          this.loginError = true;
        }
      );
  }
}