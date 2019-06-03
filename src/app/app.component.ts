import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

declare var clearStorage: any
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	ngOnInit(): void {

	}

	constructor(private router: Router) {
	}

	Logout() {
		var username = localStorage.getItem('Username');
		var priKey = localStorage.getItem('PrivateKey');
		var priSecret = localStorage.getItem('PrivateSecret');
		if (username || priKey || priSecret) {
			this.router.navigate(['/login']);
			localStorage.removeItem('Username')
			localStorage.removeItem('PrivateKey')
			localStorage.removeItem('PrivateSecret')
		}
	}

}