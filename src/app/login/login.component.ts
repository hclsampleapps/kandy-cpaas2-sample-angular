import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
// import { DataService } from '../services/data.service'
import { log } from 'util';
import { MatRadioChange } from '@angular/material';

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
    fullUrl: string = '/cpaas/auth/v1/token';
    loginType: string = 'passwordGrant';
    privateKey: string = '';
    privateSecret: string = '';

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

    onChangeLoginType(mrChange: MatRadioChange) {
        this.loginType = mrChange.value;
    }

    async login() {
        if (this.loginType == 'passwordGrant') {
            if (this.user && this.pass && this.clientid) {
                if (confirm('You have successfully logged in. Please click OK to subscribe.')) {
                    try {
                        const tokens = await this.getTokensByPasswordGrant();
                        kandy.setTokens(tokens);
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
        } else {
            if (this.privateKey && this.privateSecret) {
                if (confirm('You have successfully logged in. Please click OK to subscribe.')) {
                    try {
                        const tokens = await this.getTokensByClientCredGrant();
                        kandy.setTokens(tokens)
                        this.log('Successfully logged in with project User ' + this.privateKey)
                    } catch (error) {
                        this.log('Error: Failed to get authentication tokens. Error: ' + error)
                    }
                    const services = ['call']
                    const subscriptionType = 'websocket'
                    kandy.services.subscribe(services, subscriptionType)
                    this._router.navigate(["/call"])
                } else {
                    this.privateKey = '';
                    this.privateSecret = '';
                    this.log('Please login prior moving to next page!');
                }
            } else {
                alert('Please enter your Client Credentials first');
            }
        }
    }

    async getTokensByPasswordGrant() {
        const formBody = this.createFormBody({
            client_id: this.clientid,
            username: this.user,
            password: this.pass,
            grant_type: 'password',
            scope: 'openid'
        })

        // POST a request to create a new authentication access token.
        const fetchResult = await fetch(this.serverurl + this.fullUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        })

        // Parse the result of the fetch as a JSON format.
        const data = await fetchResult.json()

        return {
            accessToken: data.access_token,
            idToken: data.id_token
        }
    }

    async getTokensByClientCredGrant() {
        const formBody = this.createFormBody({
            client_id: this.privateKey,
            client_secret: this.privateSecret,
            grant_type: 'client_credentials',
            scope: 'openid regular_call'
        })

        // POST a request to create a new authentication access token.
        const fetchResult = await fetch(this.serverurl + this.fullUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        })
        // Parse the result of the fetch as a JSON format.
        const data = await fetchResult.json();

        return {
            accessToken: data.access_token,
            idToken: data.id_token
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
