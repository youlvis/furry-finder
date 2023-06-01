import { Component, HostListener, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent {
  isMenuOpen = false;

  constructor(private elementRef: ElementRef, private authService: AuthService) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const menuButton = this.elementRef.nativeElement.querySelector('.profile-button');
    if (!menuButton?.contains(target)) {
      this.isMenuOpen = false;
    }
  }

  logOut() {
    this.authService.logOut().subscribe(
      () => {
        console.log("Sesión cerrada exitosamente.");
      },
      (error) => {
        console.error("Error al cerrar sesión:", error);
      }
    );
  }
}
