import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/auth/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'perfil',
    loadChildren: () =>
      import('./modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'pet-search',
    loadChildren: () =>
      import('./modules/pet-search/pet-search.module').then(m => m.PetSearchModule)
  },
  {
    path: 'found-pet',
    loadChildren: () =>
      import('./modules/found-pet/found-pet.module').then(m => m.FoundPetModule)
  },
  {
    path: 'search-map',
    loadChildren: () =>
      import('./modules/search-map/search-map.module').then(m => m.SearchMapModule)
  },
  {
    path: '**', loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
