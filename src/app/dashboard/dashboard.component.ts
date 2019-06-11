import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tcc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
      name: 'Directory & AddressBook',
      link: 'addressDirectory',
      icon: 'contact_phone'
    },
    {
      name: 'Back to Dashboard Page',
      link: 'dashboard',
      icon: 'dashboard'
    }
  ];

  constructor(private router: Router, private _ngZone: NgZone) {
    window['DashboardComponent'] = { component: this, zone: _ngZone };
  }

  ngOnInit() {
  }

  sms() {
    this.router.navigate(['/sms'])
  }

  chat() {
    this.router.navigate(['/chat']);
  }

  audiovideo() {
    this.router.navigate(['/call'])
  }

  presence() {
    this.router.navigate(['/presence'])
  }

  addressDirectory() {
    this.router.navigate(['/addressDirectory'])
  }

}
