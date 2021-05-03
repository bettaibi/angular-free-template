import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationModule } from 'app/shared/navigation/navigation.module';

const routes: Routes = [
  { path: '', component: AdminComponent , children: [
    { path: '', pathMatch: 'full', redirectTo: '/statistics' },
    { path: 'statistics', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'custom-components', loadChildren: () => import('./custom-components/custom-components.module').then(m => m.CustomComponentsModule)},
  ]}
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NavigationModule
  ]
})
export class AdminModule {}
