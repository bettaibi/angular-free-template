import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./layouts/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth', 
    loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule),
  },
  { 
    path: 'landing-pages', 
    loadChildren: () => import('./layouts/admin/landing-pages/landing-pages.module').then(m => m.LandingPagesModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
