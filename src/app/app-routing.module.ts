import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, RouteReuseStrategy } from '@angular/router';
import { CallComponent } from './call/call.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'call', component: CallComponent },
  { path: 'login', component: LoginComponent, },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
