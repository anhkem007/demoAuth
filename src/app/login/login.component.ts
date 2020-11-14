import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';

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

  constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.CheckLogin(this.user).subscribe(res => {
      console.log(res);
    });
  }
}
