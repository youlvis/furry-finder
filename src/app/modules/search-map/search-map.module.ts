import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMapComponent } from './search-map.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SearchMapComponent }]

@NgModule({
  declarations: [SearchMapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SearchMapModule { }
