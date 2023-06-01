import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileMenuComponent } from './navbar/profile-menu/profile-menu.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SpinnerComponent } from './spinner/spinner.component';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { ModalsComponent } from './modals/modals.component';
import { ModalDogComponent } from './card/modal-dog/modal-dog.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, CardComponent, SpinnerComponent, UploadImgComponent, AlertModalComponent, ProfileMenuComponent, ModalsComponent, ModalDogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  exports: [NavbarComponent, FooterComponent, CardComponent, UploadImgComponent]
})
export class SharedModule { }
