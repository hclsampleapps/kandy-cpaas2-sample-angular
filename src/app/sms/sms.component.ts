import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KandyService } from 'app/kandy.service';

// declare var kandy: any;
// var currentConvo: any;

@Component({
  selector: 'tcc-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})

export class SmsComponent implements OnInit {

  number: any;
  textMessage: any;
  message: any;
  currentConvo: any;

  constructor(private router: Router, private ks: KandyService) {
    this.currentConvo;
    
    this.ks.client.on('messages:change', (convo) => {
      var destination = convo.destination[0]
      console.log('New message in conversation with ' + destination)
      this.currentConvo = this.ks.client.conversation.get(destination, { type: convo.type })
      console.log(this.currentConvo)

      if (!this.currentConvo && ['im', 'chat', 'sms'].includes(convo.type)) {
        this.currentConvo = this.ks.client.conversation.get(destination, {
          type: convo.type
        })
        console.log(this.currentConvo);
      }

      // If the message is in the current conversation, render it.
      if (this.currentConvo.destination[0] === destination) {
        this.renderLatestMessage(this.ks.client.conversation.get(this.currentConvo.destination, { type: convo.type }))
      }
    });


    this.ks.client.on('conversations:change', (convos) => {
      console.log('New conversation');
      // If we don't have a current conversation, assign the new one and render it.
      if (!this.currentConvo && convos.length !== 0) {
        this.currentConvo = this.ks.client.conversation.get(convos[0].destination, { type: convos[0].type })
        console.log(this.currentConvo);
        this.renderLatestMessage(this.currentConvo)
      }
    });
  }

  ngOnInit() {
  }

  subscribe() {
    const services = ['smsinbound', 'smsoutbound']
    const subscriptionType = 'websocket'
    this.ks.client.services.subscribe(services, subscriptionType)
    this.log('Successfully subscribed to SMS services');
  }

  sendMessage() {
    console.log(this.currentConvo);
    if (!this.currentConvo) {
      this.log('No current conversation to send message to');
      return;
    }

    var msg = this.currentConvo.createMessage(this.textMessage);
    msg.send();
    this.log('Message sent successfully');
  }

  conversation() {
    if (this.number != null && this.number != "") {
      this.currentConvo = this.ks.client.conversation.create([this.number], {
        type: 'sms'
      })
      this.log('Conversation created with : ' + this.number);
      console.log('*****************', this.currentConvo);
    } else {
      this.log('Please enter User ID or Phone Number to create a conversation.');
    }
  }

  renderLatestMessage(convo: any) {
    var msgs = convo.getMessages();
    var msgLength = msgs[msgs.length - 1];

    var text = msgLength.sender + ': ' + msgLength.parts[0].text;
    var convoDiv = document.getElementById('smsContent');
    convoDiv.innerHTML += '<div>' + text + '</div>';
    convoDiv.scrollTop = convoDiv.scrollHeight;
    convoDiv.scrollIntoView(false);
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
