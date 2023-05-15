import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,  
  Route,
  UrlSegment,
  CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { homepage } from 'src/app/data/const';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor( private router: Router, private auth: AuthService) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    console.log('LoggedIn Guard working!');
    return this.redirectIfUnauthenticated(state);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.redirectIfUnauthenticated(state);
  }

  private redirectIfUnauthenticated(
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.auth.isAuthenticated$.pipe(
      tap((loggedIn) => {
        if (loggedIn) {
          this.auth.loginWithRedirect({
            appState: { target: homepage },
          });
        }
      })
    );
  }


}

/* if (!this.userService.isLoggedIn()) {
  return true;
}
this.router.navigate([homepage]);
return false; */


/* 
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.auth.isAuthenticated$.pipe(take(1));
  } */







