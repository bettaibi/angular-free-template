import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudHostingComponent } from './cloud-hosting.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: CloudHostingComponent}
]

@NgModule({
  declarations: [CloudHostingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CloudHostingModule {}
