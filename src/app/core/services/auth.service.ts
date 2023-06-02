import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService
  ) { }

  login(data: any): Observable<any> {
    return this.http.post('http://pupfinder.us-east-1.elasticbeanstalk.com/user/login', data).pipe(
      tap((response: any) => {
        this.sessionStorageService.saveToken(response.AccessToken);
        this.sessionStorageService.saveExpiration(response.ExpiresIn);
        this.setLoggedIn(true);
      })
    );
  }

  register(data: any): Observable<any> {
    return this.http.post('http://pupfinder.us-east-1.elasticbeanstalk.com/user/singUp', data)
  }

  confirmEmail(data: any): Observable<any> {
    return this.http.post('http://pupfinder.us-east-1.elasticbeanstalk.com/user/confirmSingUp', data)
  }

  logOut(): Observable<any> {
    const data = this.sessionStorageService.getToken();
    this.sessionStorageService.clearSessionStorage();
    console.log(data)
    return this.http.post('http://pupfinder.us-east-1.elasticbeanstalk.com/user/logOutUser', data)
  }

  isLoggedIn(): Observable<boolean> {
    const accessToken = this.sessionStorageService.getToken();
    const expiration = this.sessionStorageService.getExpiration();

    if (accessToken && expiration) {
      const expirationDate = Date.now() + expiration;
      const currentDate = Date.now();
      const isLoggedIn = expirationDate > currentDate;
      this.setLoggedIn(isLoggedIn);
    } else {
      this.setLoggedIn(false);
    }

    return this.isLoggedInSubject.asObservable();
  }

  private setLoggedIn(value: boolean): void {
    this.isLoggedInSubject.next(value);
  }
}
