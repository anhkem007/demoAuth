import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = 'https://localhost:44396/api/Users';

  constructor(private httpClient: HttpClient) {
  }

  CheckLogin(user: any): Observable<any> {
    return this.httpClient.post(`${this.api}/getToken`, user);
  }

  getOtp(username: string): Observable<any> {
    return this.httpClient.post(`${this.api}/getOtp`, {Username: username});
  }

  verifyOtp(otp: string, id: number): Observable<any> {
    return this.httpClient.post(`${this.api}/verifyOtp`, {Id: id, Otp: otp});
  }

  Create(user: any): Observable<any> {
    return this.httpClient.post(`${this.api}`, user);
  }

  MyUser(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.get(`${this.api}/MyUser`, {headers});
  }

}
