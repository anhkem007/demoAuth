import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login/login.service';
import {HttpClientModule} from '@angular/common/http';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { InputOTPComponent } from './input-otp/input-otp.component';
import {NgOtpInputModule} from 'ng-otp-input';
import { CreateAccountComponent } from './create-account/create-account.component';
import { WellcomeComponent } from './wellcome/wellcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    InputOTPComponent,
    CreateAccountComponent,
    WellcomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgOtpInputModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
