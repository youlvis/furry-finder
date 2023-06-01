import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private readonly accessTokenKey = 'accessToken';
  private readonly expirationKey = 'expiration';

  saveToken(accessToken: string): void {
    sessionStorage.setItem(this.accessTokenKey, accessToken);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.accessTokenKey);
  }

  saveExpiration(expiration: number): void {
    const expirationTime = Date.now() + (expiration * 1000); // Convertir segundos a milisegundos y sumar a la fecha actual
    sessionStorage.setItem(this.expirationKey, expirationTime.toString());
  }

  getExpiration(): number | null {
    const expirationTime = sessionStorage.getItem(this.expirationKey);
    if (expirationTime) {
      const currentTime = Date.now();
      const remainingTime = parseInt(expirationTime, 10) - currentTime;
      return remainingTime > 0 ? remainingTime : null;
    }
    return null;
  }

  clearSessionStorage(): void {
    sessionStorage.clear();
  }

}
