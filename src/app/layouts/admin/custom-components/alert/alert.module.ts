import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { Routes, RouterModule } from '@angular/router';
import { BnAlertModule } from 'src/app/@BN/components/bn-alert/bn-alert.module';
import { AlertContentComponent } from './alert-content/alert-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

const routes: Routes = [
  { path: '', component: AlertComponent}
];

@NgModule({
  declarations: [AlertComponent, AlertContentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BnAlertModule,
    MatButtonModule,
    MatDividerModule
  ],
  entryComponents: [
    AlertContentComponent
  ]
})
export class AlertModule {}
