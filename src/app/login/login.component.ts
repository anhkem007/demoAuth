import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = {
    Username: '',
    Password: ''
  };
  loginFail = false;

  constructor(public loginService: LoginService,
              public router: Router
  ) {
    if (localStorage.getItem('token')){
      router.navigate(['/Welcome']);
    }
  }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.CheckLogin(this.user).subscribe(res => {
      console.log(res);
      if (!res.auth) {
        this.loginFail = true;
      }

      if (res.token) {
        this.loginFail = false;
        localStorage.setItem('token', JSON.stringify(res));
        this.router.navigate(['/Welcome']);

      }

    });
  }
}
