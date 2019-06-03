import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tcc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
