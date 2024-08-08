import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(v => console.log(v));
   }

}
