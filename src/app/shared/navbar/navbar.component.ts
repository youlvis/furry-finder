import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navLinks: Element | null = null;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe((isLoggedIn) => {
      this.isLogin(isLoggedIn)
    });
  }

  isLogin(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  onToggleMenu(e: any) {
    this.navLinks = document.querySelector('.nav-links');
    this.navLinks?.classList.toggle('top-[9%]')
  }


  closeNav() {
    document.querySelector('.nav-links').classList.remove('top-[9%]');
  }
}
