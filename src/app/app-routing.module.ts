import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, RouteReuseStrategy } from '@angular/router';
import { CallComponent } from './call/call.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmsComponent } from './sms/sms.component';
import { ChatComponent } from './chat/chat.component';
import { PresenceComponent } from './presence/presence.component';
import { AddressDirectoryComponent } from './address-directory/address-directory.component';

const routes: Routes = [
  { path: 'call', component: CallComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sms', component: SmsComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'presence', component: PresenceComponent },
  { path: 'addressDirectory', component: AddressDirectoryComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
