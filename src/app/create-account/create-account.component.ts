import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public user = {
    Username: '',
    Password: '',
    Sdt: ''
  };

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  create(): void {
    this.loginService.Create(this.user).subscribe(res => {
      console.log(res);
      this.router.navigate(['/Login']);
    });
  }
}
