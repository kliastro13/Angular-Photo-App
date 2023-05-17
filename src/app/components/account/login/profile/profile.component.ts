import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-user-profile',
  template: `
    <p>User profile working!</p>
    <ul *ngIf="auth.user$ | async as user">
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>      
    </ul>`
})
export class UserProfileComponent implements OnInit{
  constructor(public auth: AuthService) {}  

  ngOnInit(): void {
   this.auth.isAuthenticated$.subscribe(v => console.log(v));   
  }
} 

    

  

 
  
 
  
