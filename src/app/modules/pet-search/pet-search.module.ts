import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetSearchComponent } from './pet-search.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [{ path: '', component: PetSearchComponent }]

@NgModule({
  declarations: [PetSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatProgressSpinnerModule
  ]
})
export class PetSearchModule { }
