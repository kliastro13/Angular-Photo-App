import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { uk_UA } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import uk from '@angular/common/locales/uk';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';

import { AccountModule } from './components/account/account.module';
import { AuthModule } from '@auth0/auth0-angular';
import { ProfileComponent } from './components/profile/profile.component';


registerLocaleData(uk);

@NgModule({
  declarations: [AppComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    ReactiveFormsModule,
    AccountModule,
    AuthModule.forRoot({
      domain: 'dev-angular-photo-app.eu.auth0.com',
      clientId: 'OMqDrzY1bpDovT6zgEgSScgiiRnfoo57',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: uk_UA }],
  bootstrap: [AppComponent],
})
export class AppModule {}
