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

import { AuthModule } from '@auth0/auth0-angular';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthButtonComponent} from './components/profile/authButtonComponent/authButton.component';
import { WelcomeModule } from './components/welcome/welcome.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutEditButtonComponent } from './components/profile/about-edit-button/about-edit-button.component';
import { AvatarComponent } from './components/profile/avatar/avatar.component';
import { NewPhotoComponent } from './components/profile/new-photo/new-photo.component';
import { CategoriesComponent } from './components/profile/categories/categories.component';


registerLocaleData(uk);

@NgModule({
  declarations: [AppComponent, ProfileComponent, AuthButtonComponent, MainPageComponent, AboutEditButtonComponent, AvatarComponent, NewPhotoComponent, CategoriesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    ReactiveFormsModule,
    WelcomeModule,
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
