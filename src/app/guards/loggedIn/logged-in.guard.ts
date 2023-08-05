import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { homepage } from 'src/app/data/const';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): Observable<boolean>{
    console.log('LoggedIn Guard working!');
    return this.isNotAuthenticated();
  }

  private isNotAuthenticated(): Observable<boolean> {
    return this.auth.isAuthenticated$.pipe(
      map(v => {
        if(v){
          this.router.navigate(['/main-page']);
        }
        return v ? false : true;
      })
    );
  }
}







