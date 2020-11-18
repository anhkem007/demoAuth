import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public user = {
    Username: '',
    Password: '',
    Id: 0,
    Sdt: '',
  };
  otp: string;

  notExist = false;
  flag = true;
  newPass: string;

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  reset(): void {
    this.loginService.getOtp(this.user.Username).subscribe(res => {
      console.log(res);
      if (res.auth) {
        this.flag = !this.flag;
        this.user.Id = res.id;
        this.user.Sdt = res.phone;
      } else {
        this.notExist = true;
      }
    }, error => {
      this.notExist = true;
    });
  }

  getInputOtp(e): void {
    this.otp = e;
  }

  verify(): void {
    this.loginService.verifyOtp(this.otp, this.user.Id).subscribe(
      res => {
        console.log(res);
        if (res.auth) {
          this.newPass = res.newPass;
        } else {
          this.notExist = true;
        }
      }
    );
  }

  backLogin(): void {
    this.router.navigate(['/Login']);
  }
}
