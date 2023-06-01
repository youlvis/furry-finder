import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private loginModalSubject = new Subject<void>();

  // Observable para suscribirse a las notificaciones de mostrar el modal
  loginModal$ = this.loginModalSubject.asObservable();

  showLoginModal() {
    console.log("SERVICO ALERTA")
    this.loginModalSubject.next();
  }
}
