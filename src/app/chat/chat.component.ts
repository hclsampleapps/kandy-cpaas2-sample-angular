import { Component, OnInit } from '@angular/core';
import { KandyService } from 'app/kandy.service';

@Component({
  selector: 'tcc-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  contactId: any;
  chatMessage: any;
  currentConvo: any;
  // content: any;

  constructor(public kandy: KandyService) {

    console.log('kandy chat');
    this.currentConvo;

    this.kandy.client.on('messages:change', (convo) => {
      var destination = convo.destination[0]
      this.log('New message in conversation with ' + destination)
      this.currentConvo = this.kandy.client.conversation.get(destination, { type: convo.type })
      console.log(this.currentConvo)

      if (!this.currentConvo && ['im', 'chat', 'sms'].includes(convo.type)) {
        this.currentConvo = this.kandy.client.conversation.get(destination, {
          type: convo.type
        })
        console.log(this.currentConvo);
      }

      // If the message is in the current conversation, render it.
      if (this.currentConvo.destination[0] === destination) {
        this.renderLatestMessage(this.kandy.client.conversation.get(this.currentConvo.destination, { type: convo.type }))
      }
    });


    this.kandy.client.on('conversations:change', (convos) => {
      console.log('New conversation');
      // If we don't have a current conversation, assign the new one and render it.
      if (!this.currentConvo && convos.length !== 0) {
        this.currentConvo = this.kandy.client.conversation.get(convos[0].destination, { type: convos[0].type })
        console.log(this.currentConvo);
        this.renderLatestMessage(this.currentConvo)
      }
    });

  }

  ngOnInit() {
  }

  subscribe() {
    const services = ['chat'];
    const subscriptionType = 'websocket';
    this.kandy.client.services.subscribe(services, subscriptionType);
    this.log('Subscribed to CHAT services');
  }

  conversation() {
    if (this.contactId != null && this.contactId != "") {
      this.currentConvo = this.kandy.client.conversation.create([this.contactId], {
        type: 'chat'
      })
      this.log('Conversation created with : ' + this.contactId);
      console.log('*****************', this.currentConvo);
    } else {
      this.log('Please enter User ID or Phone Number to create a conversation.');
    }
  }

  sendMessage() {
    console.log(this.currentConvo);
    if (!this.currentConvo) {
      this.log('No current conversation to send message to');
      return;
    }

    var msg = this.currentConvo.createMessage(this.chatMessage);
    msg.send();
    this.log('Message sent successfully');
  }

  renderLatestMessage(convo: any) {
    var msgs = convo.getMessages();
    var msgLength = msgs[msgs.length - 1];

    var text = msgLength.sender + ': ' + msgLength.parts[0].text;
    // this.content += text; 
    var convoDiv = document.getElementById('chatContent');
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
