import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/account/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { homepage } from './data/const';
import { LoggedInGuard } from './guards/loggedIn/logged-in.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] },
  { path: homepage, component: WelcomeComponent, canActivate: [AuthGuard] },
  /* {
    path: homepage,
    loadChildren: () =>
      import('./components/welcome/welcome.module').then(
        (m) => m.WelcomeModule
      ),
    canActivate: [AuthGuard],
  }, */
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
