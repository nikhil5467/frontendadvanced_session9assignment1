import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
//import { ConfigUrlService } from '../config-url.service';
import 'rxjs/Rx';

@Injectable()
export class clientService {
	private _requestOptions: RequestOptions;

	constructor(private http: Http) {
		const headers = new Headers({ 'Accept': 'application/json' });
		this._requestOptions = new RequestOptions({ headers: headers });
	}

	getTickets() {
		return this.http.get("./data.json", this._requestOptions)
						.map(res => <[]>res.json())
						.catch(this.handleError);
	}

	private handleError(error: Response) {
		// console.error(error);
		return Observable.throw(error.json().error || 'Server error');
  }
}