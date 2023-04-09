import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public auth: AuthService) {}
  isLoggedIn(): boolean {    
    if (this.auth.isAuthenticated$){
      console.log("in");
      return true;    
    }
    console.log("out");
    return false;    
  }
}





