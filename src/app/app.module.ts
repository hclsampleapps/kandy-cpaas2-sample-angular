import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CallComponent } from './call/call.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule, MatSelectModule, MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { SmsComponent } from './sms/sms.component';
import { ChatComponent } from './chat/chat.component';
import { PresenceComponent } from './presence/presence.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { KandyService } from './kandy.service';
import { AddressDirectoryComponent } from './address-directory/address-directory.component';

@NgModule({
    declarations: [
        AppComponent,
        CallComponent,
        LoginComponent,
        SmsComponent,
        ChatComponent,
        PresenceComponent,
        DashboardComponent,
        AddressDirectoryComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        FormsModule,
        MatFormFieldModule,
        MatRadioModule,
        HttpClientModule,
        MatSelectModule,
        MatCheckboxModule
    ],
    providers: [KandyService],
    bootstrap: [AppComponent]
})
export class AppModule { }
