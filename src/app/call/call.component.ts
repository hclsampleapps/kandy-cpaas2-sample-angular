import {
    Component, OnInit, ViewChildren, ViewChild, QueryList,
    ElementRef, ContentChild, NgZone
} from '@angular/core';
import { MatDialog, MatDialogRef, MatList, MatListItem, MatToolbar } from '@angular/material';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { KandyService } from 'app/kandy.service';

// declare var kandy: any;
var callIdValue: any;

@Component({
    selector: 'tcc-call',
    templateUrl: './call.component.html',
    styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {

    number: string;
    message: string = '';
    test: any;

    // getting a reference to the overall list, which is the parent container of the list items
    @ViewChild(MatList, { read: ElementRef }) matList: ElementRef;

    // getting a reference to the items/messages within the list
    @ViewChildren(MatListItem, { read: ElementRef }) matListItems: QueryList<MatListItem>;


    constructor(private router: Router, public ks: KandyService) {
    }


    ngOnInit(): void {

        this.log('ngOnInit', this.message);
        // Using timeout due to https://github.com/angular/angular/issues/14748

        this.ks.client.on('call:error', (params) =>  {
            this.log('call:error', params.error.message)
        })

        // Set listener for changes in a call's state.
        this.ks.client.on('call:stateChange', (params) => {
            const call = this.ks.client.call.getById(params.callId)
            this.log('Call state changed to: ' + call.state)
            this.renderMedia(params.callId);
            // if (call != 'ENDED')
            //     this.log('call:stateChange', call, call.state)

            // If the call ended, stop tracking the callId.
            if (call.state === 'ENDED') {
                callIdValue = null
            }
        })

        // Set listener for incoming calls.
        this.ks.client.on('call:receive', (params) => {
            // Keep track of the callId.

            // Retrieve call information.
            if (params) {
                callIdValue = params.callId;
            }
            this.ks.client.call.getById(params.callId)
            this.log('call receive')
        })

        this.ks.client.on('call:answered', params => {
            this.renderMedia(params.callId)
        })

        this.ks.client.on('call:accepted', params => {
            this.renderMedia(params.callId)
        })
    }

    renderMedia(callIdValue) {
        const call = this.ks.client.call.getById(callIdValue);
        console.log('call : ', call.localTracks)
        this.log('Render Media', call);
        this.ks.client.media.renderTracks(call.localTracks, '#local-container');
        this.ks.client.media.renderTracks(call.remoteTracks, '#remote-container')
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
        document.getElementById('messages').innerHTML += message;
    }

    makeAudioCall(event: any) {
        this.log('Make Audio Call', event, this.number);
        const mediaConstraints = {
            audio: true,
            video: false
        }
        callIdValue = this.ks.client.call.make(this.number, mediaConstraints);
    }

    makeVideoCall(event: any) {
        this.log('Make Video Call', event, this.number);
        const mediaConstraints = {
            audio: true,
            video: true
        }
        callIdValue = this.ks.client.call.make(this.number, mediaConstraints);
        console.log('callIdValue is : ', callIdValue)
        console.log(document.getElementById('local-container'));
        console.log(document.getElementById('remote-container'));
    }

    answerAudioCall(event: any) {
        this.log('Answer Audio Call');
        const call = this.ks.client.call.getById(callIdValue);
        const mediaConstraints = {
            audio: true,
            video: false
        }
        this.ks.client.call.answer(callIdValue, mediaConstraints);
    }

    answerVideoCall(event: any) {
        this.log('Answer Video Call');
        const call = this.ks.client.call.getById(callIdValue);
        const mediaConstraints = {
            audio: true,
            video: true
        }
        this.ks.client.call.answer(callIdValue, mediaConstraints);
    }

    rejectCall() {
        this.log('Reject Call');
        var call = this.ks.client.call.getById(callIdValue);
        this.ks.client.call.reject(callIdValue)
    }

    endCall() {
        this.log('End Call')
        var call = this.ks.client.call.getById(callIdValue)
        this.ks.client.call.end(callIdValue)
    }



}

