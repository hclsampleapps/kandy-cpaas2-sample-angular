import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
// import { DataService } from '../services/data.service'
import { log } from 'util';

declare var kandy: any;
declare var connectStatus: any;

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

    constructor(private _router: Router, private _ngZone: NgZone) {
        window['LoginComponent'] = { component: this, zone: _ngZone };
    }

    ngOnInit() {
        this.createFormBody({ 'user': this.user, 'pass': this.pass, 'clientid': this.clientid });
        this.log(this.message);
    }

    createFormBody(paramsObject: Object) {
        const keyValuePairs = Object.entries(paramsObject).map(
            ([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value)
        )
        return keyValuePairs.join('&')
    }

    async login() {
        if (this.user && this.pass && this.clientid) {
            if (confirm('You have successfully logged in. Please click OK to subscribe.')) {
                const formBody = this.createFormBody({
                    client_id: this.clientid,
                    username: this.user,
                    password: this.pass,
                    grant_type: 'password',
                    scope: 'openid'
                })

                // POST a request to create a new authentication access token.
                const fetchResult = await fetch(this.serverurl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: formBody
                })

                // Parse the result of the fetch as a JSON format.
                const data = await fetchResult.json()
                this.log('LoginComponent, login', data);
                const cred = {
                    accessToken: data.access_token,
                    idToken: data.id_token
                }
                try {
                    kandy.setTokens(cred);
                    this.log('Successfully logged in as ' + this.user);
                } catch (error) {
                    this.log('Error: Failed to get authentication tokens. Error: ' + error)
                }
                const services = ['call']
                const subscriptionType = 'websocket'
                kandy.services.subscribe(services, subscriptionType)
                this._router.navigate(['/call'])
            } else {
                this.clientid = '';
                this.user = '';
                this.pass = '';
                this.log('Please login prior moving to next page!');
            }
        } else {
            alert('Please enter your login details first');
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
