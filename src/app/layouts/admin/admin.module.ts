import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', children: [
    {path: '', pathMatch: 'full', redirectTo: '/statistics'},
    { path: 'statistics', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
  ]}
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule {}
