import { Component,  Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-about-edit-button',
  template: `
  <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
    <button (click)="auth.logout({ logoutParams: { returnTo: document.location.origin } })">
      Edit
    </button>
  </ng-container>

  <ng-template #loggedOut>
    <button (click)="auth.loginWithRedirect()">About</button>
  </ng-template>
`,
  styleUrls: []
})
export class AboutEditButtonComponent {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}


}

