import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CustomComponentsComponent } from './custom-components.component'

const routes: Routes = [
  {path: '', component: CustomComponentsComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'toast'},
    {path: 'toast', loadChildren: ()=> import('./toast/toast.module').then(m=> m.ToastModule)}
  ]}
];


@NgModule({
  declarations: [
    CustomComponentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomComponentsModule { }