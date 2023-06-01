import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';
import { NotificationService } from '../services/notification-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(
      tap((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.notificationService.showLoginModal();
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
