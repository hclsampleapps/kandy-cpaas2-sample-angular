import { Injectable } from '@angular/core';
import { create } from '../scripts/kandy';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class KandyService {

  client: any;
  base1: string = 'https://oauth-cpaas.att.com/cpaas/auth/v1/token';
  base2: string = 'https://nvs-cpaas-oauth.kandy.io/cpaas/auth/v1/token';
  baseUrl1: string = '';
  baseUrl2: string = '';
  fullUrl: string = '/cpaas/auth/v1/token';
  token: any;
  callId: any;
  loggedInStatus = false;
  user: any;
  password: any;

  constructor(public http: HttpClient) {
    this.baseUrl1 = new URL(this.base1).host;
    console.log(this.baseUrl1);
    this.baseUrl2 = new URL(this.base2).host;
    console.log(this.baseUrl2)
    if (this.baseUrl1) {
      this.client = create({
        authentication: {
          server: {
            base: this.baseUrl1
          },
          clientCorrelator: 'sampleCorrelator'
        },
        logs: {
          logLevel: 'debug'
        }
      });
      console.log('object created for production site')
    } else if (this.baseUrl2) {
      this.client = create({
        authentication: {
          server: {
            base: this.baseUrl2
          },
          clientCorrelator: 'sampleCorrelator'
        },
        logs: {
          logLevel: 'debug'
        }
      });
      console.log('object created for staging site')
    } else {
      console.log('Cant create kandy object either for staging or production url')
    }


    console.log(this.client.conversation);

    this.client.on('subscription:change', (params) => {
      console.log('Subscription changed');
    });

    this.client.on('subscription:error', (params) => {
      console.log('Subscription Error: ' + params.error.message + ' (' + params.error.code + ')');
    })

    window.onload = () => {
      localStorage.removeItem('LoggedInUser');
      localStorage.removeItem('PrivateKey');
      localStorage.removeItem('PrivateSecret');
    }
  }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return localStorage.getItem('LoggedInUser') || localStorage.getItem('PrivateKey')
  }

  subscribing() {
    var serviceList = ['chat', 'call', 'smsinbound', 'presence'];
    this.client.services.subscribe(serviceList, 'websocket');
  }

  getTokenPassGrant(user, password, clientId, serverUrl) {
    console.log('test ----');
    var headers = new HttpHeaders({'Content-Type' : 'application/x-www-form-urlencoded'});
    
    var params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', user);
    params.set('password', password);
    params.set('scope', 'openid');
    params.set('client_id', clientId);
    console.log('parameters ---- ', params);
    localStorage.setItem('LoggedInUser', user);
    console.log(localStorage.getItem('LoggedInUser'))

    return this.http.post(serverUrl + this.fullUrl, params.toString(), {headers: headers})
  }

  getTokenClientCred(privateKey, privateSecret, stageServer) {
    var head = new HttpHeaders({'Content-Type' : 'application/x-www-form-urlencoded'});
    var par = new URLSearchParams()
    par.set('grant_type', 'client_credentials');
    par.set('client_id', privateKey);
    par.set('client_secret', privateSecret);
    par.set('scope', 'openid profile email');
    localStorage.setItem('PrivateKey', privateKey);
    localStorage.setItem('PrivateSecret', privateSecret);

    return this.http.post(stageServer + this.fullUrl, par.toString(), {headers: head})
  }

  setToken(tok) {
    this.token = {
      accessToken: tok.access_token,
      idToken: tok.id_token
    }
    this.client.setTokens(this.token);
    // console.log(this.currentConvo);
  }

  getInformation() {
    return this.client.getUserInfo(this.token);
  }

}
