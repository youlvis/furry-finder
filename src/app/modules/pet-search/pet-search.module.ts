import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetSearchComponent } from './pet-search.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: '', component: PetSearchComponent }]

@NgModule({
  declarations: [PetSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PetSearchModule { }
