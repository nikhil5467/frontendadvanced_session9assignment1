// Angular 2: Configuring LoginService
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable() class LoginService {
	constructor(@Inject("LoginServiceConfig")  public config: {url: string}) {}
  //...
}