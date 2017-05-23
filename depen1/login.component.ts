import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
@Component({
  selector: 'login',
  directives: [Login],
  providers: [LoginService],
  template: `
                <form #f="form" (submit)="onSubmit(f.value)">
            Text <input type="text" ngControl="login">
            Password <input type="password" ngControl="password">
            <button>Submit</button>
        </form>
    `
})
class Login {
  constructor(public service: LoginService) {}

    onSubmit(formValue: { login: string, password: string }) {
    this.service.login(formValue);
    }
}