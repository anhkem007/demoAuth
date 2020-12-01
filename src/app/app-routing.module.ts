import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {WellcomeComponent} from './wellcome/wellcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'prefix',
  },
  { path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Forgot',
    component: ResetPasswordComponent
  },
  {
    path: 'Create',
    component: CreateAccountComponent
  },
  {
    path: 'Welcome',
    component: WellcomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
