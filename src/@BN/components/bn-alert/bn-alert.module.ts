import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnAlertComponent } from './bn-alert.component';
import { BnAlertService } from './bn-alert.service';
import { BnAlerDirective } from './bn-alert.directive';

@NgModule({
  declarations: [BnAlertComponent, BnAlerDirective],
  imports: [
    CommonModule
  ],
  exports :[BnAlertComponent],
  providers: [BnAlertService],
  entryComponents: [BnAlertComponent]
})
export class BnAlertModule {}
