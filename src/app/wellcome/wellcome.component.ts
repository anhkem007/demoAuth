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

  constructor(private loginService: LoginService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if (token) {
      token = JSON.parse(token).token;
      console.log(token);
      this.loginService.MyUser(token).subscribe(res =>{
        this.user = res;
      }, error => {
        localStorage.removeItem('token');
        this.router.navigate(['/Login']);
      });
    } else {
      this.router.navigate(['/Login']);
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/Login']);
  }
}
