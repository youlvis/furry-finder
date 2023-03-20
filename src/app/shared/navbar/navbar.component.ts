import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navLinks: Element | null = null;
  constructor() { }

  ngOnInit(): void {
  }

  onToggleMenu(e: any) {
    console.log(e)
    this.navLinks = document.querySelector('.nav-links');
    // e.name = e.name === 'menu' ? 'close' : 'menu'
    this.navLinks?.classList.toggle('top-[9%]')
  }
}
