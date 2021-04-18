import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CustomComponentsComponent } from './custom-components.component'

const routes: Routes = [
  {path: '', component: CustomComponentsComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'toast'},
    {path: 'toast', loadChildren: () => import('./toast/toast.module').then(m=> m.ToastModule)},
    {path: 'alert', loadChildren: () => import('./alert/alert.module').then(m => m.AlertModule)},
    {path: 'dynamic-form-validation', loadChildren: () => import('./dynamic-form-validation/dynamic-form-validation.module').then(m=> m.DynamicFormValidationModule)},
    
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
export class CustomComponentsModule {}
