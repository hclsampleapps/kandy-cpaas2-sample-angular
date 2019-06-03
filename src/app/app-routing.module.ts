import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, RouteReuseStrategy } from '@angular/router';
import { CallComponent } from './call/call.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmsComponent } from './sms/sms.component';
import { ChatComponent } from './chat/chat.component';
import { PresenceComponent } from './presence/presence.component';
import { AddressDirectoryComponent } from './address-directory/address-directory.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'call', component: CallComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'sms', component: SmsComponent, canActivate: [AuthGuard] },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  { path: 'presence', component: PresenceComponent, canActivate: [AuthGuard] },
  { path: 'addressDirectory', component: AddressDirectoryComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
