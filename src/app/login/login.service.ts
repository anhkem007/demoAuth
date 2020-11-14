import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = 'https://localhost:44396/api/Users';

  constructor(private httpClient: HttpClient) {
  }

  CheckLogin(user: any): Observable<any> {
    return this.httpClient.post(`${this.api}/CheckLogin`, user);
  }
}
