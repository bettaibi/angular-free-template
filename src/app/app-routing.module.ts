import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./layouts/admin/admin.module').then(m => m.AdminModule)},
  {path: 'auth', loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
