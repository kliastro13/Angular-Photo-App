import { Component,  Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.component.html',
  styleUrls: ['./new-photo.component.less']
})
export class NewPhotoComponent {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }


}
