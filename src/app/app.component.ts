import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { KandyService } from './kandy.service';

declare var clearStorage: any
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	fillerNav: Array<{ name: string, link: string, icon: string }> = [
		{
			name: 'SMS',
			link: 'sms',
			icon: 'textsms'
		},
		{
			name: 'Chat',
			link: 'chat',
			icon: 'chat'
		},
		{
			name: 'Audio/Video Call',
			link: 'call',
			icon: 'video_call'
		},
		{
			name: 'Presence',
			link: 'presence',
			icon: 'contacts'
		},
		{
			name: 'Directory & Address-book',
			link: 'addressDirectory',
			icon: 'contact_phone'
		},
		{
			name: 'Dashboard',
			link: 'dashboard',
			icon: 'dashboard'
		}
	];

	showMenu: boolean;

	ngOnInit(): void {
		this.showMenu = this.ks.showNav;
		console.log(this.showMenu);

		this.router.events.subscribe((val) => {
			if (val instanceof NavigationStart) {
				if (val.url == '/dashboard') {
					this.showMenu = !this.ks.showNav;
					console.log(this.showMenu);
				}
				console.log(val.url);
			}
		})

	}

	constructor(private router: Router, public ks: KandyService) {
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