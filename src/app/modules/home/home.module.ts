import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecentlyLostComponent } from './recently-lost/recently-lost.component';


const routes: Routes = [{ path: '', component: HomeComponent }]


@NgModule({
  declarations: [HomeComponent, RecentlyLostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
