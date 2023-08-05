import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { homepage } from './data/const';
import { LoggedInGuard } from './guards/loggedIn/logged-in.guard';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: homepage },
  { path: homepage, component: WelcomeComponent, canActivate: [LoggedInGuard] },
  { path: 'main-page', component: MainPageComponent, canActivate: [AuthGuard] },
  /* {
    path: homepage,
    loadChildren: () =>
      import('./components/welcome/welcome.module').then(
        (m) => m.WelcomeModule
      ),
    canActivate: [AuthGuard],
  }, */
  { path: '**', redirectTo: 'homepage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
