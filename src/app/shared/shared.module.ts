import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileMenuComponent } from './navbar/profile-menu/profile-menu.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalPetComponent } from './card/modal-pet/modal-pet.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { UploadImgComponent } from './upload-img/upload-img.component';




@NgModule({
  declarations: [NavbarComponent, FooterComponent, CardComponent, ModalPetComponent, SpinnerComponent, UploadImgComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ],
  exports: [NavbarComponent, FooterComponent, CardComponent, UploadImgComponent]
})
export class SharedModule { }
