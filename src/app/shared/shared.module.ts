import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileMenuComponent } from './navbar/profile-menu/profile-menu.component';



@NgModule({
  declarations: [NavbarComponent, ProfileMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent]
})
export class SharedModule { }
