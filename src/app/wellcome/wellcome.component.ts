import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {
  user = null;
  flag = 1;
  otp = '';
  userReceive = '';
  amount: number;

  constructor(private loginService: LoginService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.flag = 1;
    let token = localStorage.getItem('token');
    if (token) {
      token = JSON.parse(token).token;
      console.log(token);
      this.loginService.MyUser(token).subscribe(res => {
        this.user = res;
      }, error => {
        localStorage.removeItem('token');
        this.router.navigate(['/Login']);
      });
    } else {
      this.router.navigate(['/Login']);
    }
  }

  nextStage(): void {
    this.flag++;
    if (this.flag === 5) {
      this.flag = 1;
    }
  }

  reset(): void {
    console.log(this.user.username);
    this.loginService.getOtp(this.user.username).subscribe(res => {
      if (res.auth) {
        this.nextStage();
      }
    });
  }

  getInputOtp(e): void {
    this.otp = e;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/Login']);
  }

  send(): void {
    let token = localStorage.getItem('token');
    token = JSON.parse(token).token;
    this.loginService.sendMoney(this.otp, this.userReceive, this.amount, token).subscribe(res => {
      if (res.auth) {
        this.nextStage();
      }
    });
  }

  backToHome(): void {
    this.ngOnInit();
  }
}
