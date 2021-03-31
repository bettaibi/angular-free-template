import { Component, OnInit } from '@angular/core';
import { BnAlertService } from 'src/app/@BN/components/bn-alert/bn-alert.service';
import { AlertContentComponent } from './alert-content/alert-content.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(
    private alertService: BnAlertService
  ) {}

  ngOnInit(): void {}


  open(): void{
    const alretRef = this.alertService.open(AlertContentComponent, {data: {
      name: "bettaibi nidhal"
    }});

    alretRef.afterClose.subscribe((result)=>{
      console.log(result)
    });
  }

}
