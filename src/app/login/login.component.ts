import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
// import { DataService } from '../services/data.service'
import { log } from 'util';
import { MatRadioChange } from '@angular/material';
import { KandyService } from 'app/kandy.service';

@Component({
    selector: 'tcc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    clientid: string = '';
    user: string = '';
    pass: string = '';
    message: string = '';
    serverurl: string = '';
    fullUrl: string = '/cpaas/auth/v1/token';
    loginType: string = 'passwordGrant';
    privateKey: string = '';
    privateSecret: string = '';
    contact: string = '';
    data1: any;
    data2: any;
    token1: any;
    token2: any;

    constructor(private _router: Router, private _ngZone: NgZone, private ks: KandyService) {
        window['LoginComponent'] = { component: this, zone: _ngZone };
        console.log(this.ks)
    }

    ngOnInit() {
        this.log(this.message);
    }

    onChangeLoginType(mrChange: MatRadioChange) {
        this.loginType = mrChange.value;
    }

    login() {
        if (this.loginType == 'passwordGrant') {
            if (this.user && this.pass && this.clientid && this.contact) {
                // localStorage.setItem('LoggedInUser', this.user);
                this.ks.client.updateConfig({ messaging: { 'contact': this.contact } })
                this.ks.getTokenPassGrant(this.user, this.pass, this.clientid, this.serverurl).subscribe((response: any) => {
                    console.log(response);
                    this.data1 = response
                    console.log(this.data1)
                    this.setToken();
                })

            } else {
                alert('Please enter your login details first');
            }
        } else {
            if (this.privateKey && this.privateSecret) {
                localStorage.setItem('PrivateKey', this.privateKey);
                localStorage.setItem('PrivateSecret', this.privateSecret);
                this.ks.client.updateConfig({ messaging: { 'contact': this.contact } })
                this.ks.getTokenClientCred(this.privateKey, this.privateSecret, this.serverurl).subscribe((res: any) => {
                    console.log(res);
                    this.data2 = res;
                    console.log(this.data2)
                    this.setToken();
                })
            } else {
                alert('Please enter your Client Credentials first');
            }
        }
    }

    setToken(): boolean {
        if(this.loginType == 'passwordGrant') {
            this.ks.setToken(this.data1);
            if (confirm('You have successfully logged in. Please click OK to subscribe.')) {
                const services = ['call', 'chat', 'smsinbound', 'smsoutbound', 'presence']
                const subscriptionType = 'websocket'
                this.ks.client.services.subscribe(services, subscriptionType)
                this._router.navigate(['/dashboard'])
                // showMenu = this.ks.showNav;
            } else {
                this.clientid = '';
                this.user = '';
                this.pass = '';
                this.log('Please login prior moving to next page!');
            }
            return true;
        } else {
            this.ks.setToken(this.data2);
            if (confirm('You have successfully logged in. Please click OK to subscribe.')) {
                const services = ['call', 'chat', 'smsinbound', 'smsoutbound', 'presence']
                const subscriptionType = 'websocket'
                this.ks.client.services.subscribe(services, subscriptionType)
                this._router.navigate(['/dashboard'])
                // showMenu = this.ks.showNav;
            } else {
                this.privateKey = '';
                this.privateSecret = '';
                this.log('Please login prior moving to next page!');
            }
            return true;
        }
    }

    log(...args) {
        let message: string = '&#10095; ';
        for (let i = 0; i < args.length; i++) {
            if (!!args[i] && typeof args[i] == 'object') {
                message += JSON.stringify(args[i]) + ' ';
            } else {
                message += args[i] + ' ';
            }
        }
        console.log(message);
        message += '<br>';
        document.getElementById('messages').innerHTML += message;
    }

}
