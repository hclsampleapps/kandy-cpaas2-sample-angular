import {
    Component, OnInit, ViewChildren, ViewChild, QueryList,
    ElementRef, ContentChild, NgZone
} from '@angular/core';
import { MatDialog, MatDialogRef, MatList, MatListItem, MatToolbar } from '@angular/material';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

declare var kandy: any;
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


    constructor(private router: Router) {
        CallComponent.log('UsersComponent constructor');
    }


    ngOnInit(): void {

        CallComponent.log('ngOnInit', this.message);
        // Using timeout due to https://github.com/angular/angular/issues/14748

        kandy.on('call:error', function(params) {
            CallComponent.log('call:error', params.error.message)
        })

        // Set listener for changes in a call's state.
        kandy.on('call:stateChange', function(params) {
            const call = kandy.call.getById(params.callId)
            if (call != 'ENundefinedDED')
                CallComponent.log('call:stateChange', call, call.state)

            // If the call ended, stop tracking the callId.
            if (call.state === 'ENundefinedDED') {
                this.callIdValue = null
            }
        })

        // Set listener for incoming calls.
        kandy.on('call:receive', function(params) {
            // Keep track of the callId.

            // Retrieve call information.
            if (params) {
                callIdValue = params.callId;
            }
            kandy.call.getById(params.callId)
            CallComponent.log('call receive')
        })

        kandy.on('call:answered', params => {
            this.renderMedia(params.callId)
        })

        kandy.on('call:accepted', params => {
            this.renderMedia(params.callId)
        })
    }

    static log(...args) {
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
        CallComponent.log('Make Audio Call', event, this.number);
        const mediaConstraints = {
            audio: true,
            video: false
        }
        callIdValue = kandy.call.make(this.number, mediaConstraints);
    }

    makeVideoCall(event: any) {
        CallComponent.log('Make Video Call', event, this.number);
        const mediaConstraints = {
            audio: true,
            video: true
        }
        callIdValue = kandy.call.make(this.number, mediaConstraints);
    }

    answerAudioCall(event: any) {
        CallComponent.log('Answer Audio Call');
        const call = kandy.call.getById(callIdValue);
        const mediaConstraints = {
            audio: true,
            video: false
        }
        kandy.call.answer(callIdValue, mediaConstraints);
    }

    answerVideoCall(event: any) {
        CallComponent.log('Answer Video Call');
        const call = kandy.call.getById(callIdValue);
        const mediaConstraints = {
            audio: true,
            video: true
        }
        kandy.call.answer(callIdValue, mediaConstraints);
    }

    rejectCall() {
        CallComponent.log('Reject Call');
        var call = kandy.call.getById(callIdValue);
        kandy.call.reject(callIdValue)
    }

    endCall() {
        CallComponent.log('End Call')
        var call = kandy.call.getById(callIdValue)
        kandy.call.end(callIdValue)
    }

    renderMedia(params: any) {
        const call = kandy.call.getById(params);
        CallComponent.log('Render Media', call);
        kandy.media.renderTracks(call.localTracks, '#local-container');
        kandy.media.renderTracks(call.remoteTracks, '#remote-container')
    }

}

