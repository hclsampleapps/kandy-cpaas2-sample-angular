import { Component, OnInit } from '@angular/core';
import { KandyService } from 'app/kandy.service';

@Component({
  selector: 'tcc-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {

  selectedStatus: any;
  currentStatus: any[] = [];
  selectedActivity: any;
  currentAct: any[] = [];
  status: any;
  activity: any;
  note: any;
  userId: any;
  getUserId: any;

  constructor(private ks: KandyService) { 
    this.ks.client.on('presence:change', (presence) => {
      this.logMessage('prsence ---'+ JSON.stringify(presence));
      this.logMessage('Presence received for '+ presence.userId);
      this.logMessage('....Status: '+ presence.status);
      this.logMessage('....Activity: '+ presence.activity);
      if(presence.note) {
        this.logMessage('Note :'+ presence.note);
      }
    })
  }

  ngOnInit() {
  }

  subscribe() {
    const services = ['presence'];
    const subscription = 'websocket';
    this.ks.client.services.subscribe(services, subscription);
    this.log('Subscribed to presence services successfully');
  }

  populateDropdown() {
    this.selectedStatus = this.ks.client.presence.statuses;
    for(var prop in this.selectedStatus) {
      if(this.selectedStatus.hasOwnProperty(prop)) {
        this.currentStatus.push(this.selectedStatus[prop]);
        console.log(this.currentStatus)
      }
    }
    this.selectedStatus = this.currentStatus[0];

    this.selectedActivity = this.ks.client.presence.activities;
    for(var property of Object.values(this.selectedActivity)) {
      this.currentAct.push(property)
      console.log(this.currentAct);
    }
    this.selectedActivity = this.currentAct[0];
  }

  // itemList(status: any) {
  //   console.log('event is --- ', event);
  //   this.status = this.selectedStatus;
  //   this.logMessage('selected status is '+ status);
  // }

  // itemActivity(activity: any) {
  //   console.log('event is --- ', event);
  //   this.activity = this.selectedActivity;
  //   this.logMessage('selected activity is '+ activity);
  // }

  updatePresence() {
    this.ks.client.presence.update(this.status, this.activity, this.note);
    this.logMessage('Presence updated with: ' + this.selectedStatus + ' ' + this.selectedActivity + ' ' + this.note);
  }

  subscribeUser() {
    this.ks.client.presence.subscribe(this.userId);
    this.logMessage('Subscribing to : ' + this.userId);
  }

  unsubscribeUser() {
    this.ks.client.presence.unsubscribe(this.userId);
    this.logMessage('Unsubscribing from : ' + this.userId);
  }

  fetchUser() {
    this.ks.client.presence.fetch(this.getUserId);
    this.logMessage('Fetching presence for: ' + this.getUserId);
  }

  getUser() {
    const pres = this.ks.client.presence.get(this.getUserId);
    for(var getPre of pres) {
      // console.log(getPre);
      this.log('Presence for ' +  getPre.userId)
      this.log('....Status: ' + getPre.status)
      this.log('....Activity: ' + getPre.activity)
      if (getPre.note) {
        this.logMessage('....Note: ' + getPre.note)
      }
    }
  }

  clearActivity() {
    var divAct = document.getElementById('presenceActivity');
    divAct.innerHTML = '';
  }

  logMessage(message: any) {
    var msgDiv = document.getElementById('presenceActivity');
    msgDiv.innerHTML += '<div>' + message + '</div>';
    msgDiv.scrollTop = msgDiv.scrollHeight;
    msgDiv.scrollIntoView(false)
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
    message += '<br>';
    document.getElementById('messageLogs').innerHTML += message;
  }

}
