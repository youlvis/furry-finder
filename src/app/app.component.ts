import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from './core/services/notification-service.service';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PupFinderApp';
  constructor(private dialog: MatDialog, private notificationService: NotificationService) { }

  ngOnInit() {
    // Suscribirse a las notificaciones para mostrar el modal de inicio de sesión
    this.notificationService.loginModal$.subscribe(() => {
      this.openLoginModal();
    });
  }

  openLoginModal() {
    this.dialog.open(AlertModalComponent, {
      width: '400px',
      disableClose: true,
      // Otiones adicionales del modal
    });
  }

}
