import { Component, OnInit } from '@angular/core';
import { Routes ,Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { clientService } from './depandancies.service';


@Component({
  moduleId: module.id,
  selector: 'app-list-tickets',
  templateUrl: 'depandancies.component.html',
  providers: [clientService]
})

export class DepandanciesComponent implements OnInit {
	clientTickets: any;
	constructor(private router: Router, private _clientService: clientService) {
		this.getAlldetails();
	}

  ngOnInit() {
  }

  getAlldetails() {
		this._clientService.getTickets()
			.subscribe(
			(clientTickets) => this.clientTickets = clientTickets,
			error => this.clientTickets = <any>error,
			() => { console.log(this.clientTickets);}
		);
	}
}
   