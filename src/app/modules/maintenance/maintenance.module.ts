import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MaintenanceComponent }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MaintenanceModule { }
