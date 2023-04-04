import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountRoutingModule } from './account-routing.module';
import { AuthButtonComponent } from './login/authButtonComponent/authButton.component';
import { UserProfileComponent } from './login/profile/profile.component';


@NgModule({
  declarations: [LoginComponent, SignUpComponent, AuthButtonComponent, UserProfileComponent],
  imports: [
    CommonModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzCheckboxModule,
    ReactiveFormsModule,
    AccountRoutingModule,
  ],
  exports: [LoginComponent, SignUpComponent, AuthButtonComponent, UserProfileComponent],
})
export class AccountModule {}
