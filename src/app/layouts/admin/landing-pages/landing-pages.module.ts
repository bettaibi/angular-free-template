import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPagesComponent } from './landing-pages.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: LandingPagesComponent, children: [
    {path: 'cloud-hosting', loadChildren: () => import('./cloud-hosting/cloud-hosting.module').then(m => m.CloudHostingModule)}
  ]}
];

@NgModule({
  declarations: [LandingPagesComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class LandingPagesModule {}
