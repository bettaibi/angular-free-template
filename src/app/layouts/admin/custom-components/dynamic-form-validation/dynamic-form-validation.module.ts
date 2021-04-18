import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormValidationComponent } from './dynamic-form-validation.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedMaterialModule } from 'app/shared/shared_material_components/shared-mat-components.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: DynamicFormValidationComponent}
];

@NgModule({
  declarations: [DynamicFormValidationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DynamicFormValidationModule {}
