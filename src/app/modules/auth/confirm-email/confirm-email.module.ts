import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmEmailComponent } from './confirm-email.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [{ path: '', component: ConfirmEmailComponent }]

@NgModule({
  declarations: [ConfirmEmailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ConfirmEmailModule { }
