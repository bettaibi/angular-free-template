import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragdropFileUploadComponent } from './dragdrop-file-upload.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FileDropModule } from '@BN/directives/file-drop/file-drop.module';

const routes: Routes = [
  {path: '', component: DragdropFileUploadComponent}
]

@NgModule({
  declarations: [DragdropFileUploadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    FileDropModule
  ]
})
export class DragdropFileUploadModule { }
