import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit{
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
   this.auth.isAuthenticated$.subscribe(v => console.log(v));
  }
}






