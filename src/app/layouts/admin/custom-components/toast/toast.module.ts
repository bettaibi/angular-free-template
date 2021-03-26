import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ToastComponent } from './toast.component';

const routes: Routes = [
    {path: '', component: ToastComponent}
];

@NgModule({
    declarations: [
        ToastComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes)
     ],
    exports: [],
    providers: [],
})
export class ToastModule {}