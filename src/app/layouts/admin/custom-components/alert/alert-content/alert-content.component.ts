import { Component, OnInit } from '@angular/core';
import { AlertRef } from 'src/app/@BN/components/bn-alert/alert-ref';
import { AlertConfig } from 'src/app/@BN/components/bn-alert/bn-alert-config';

@Component({
  selector: 'app-alert-content',
  templateUrl: './alert-content.component.html',
  styleUrls: ['./alert-content.component.scss']
})
export class AlertContentComponent implements OnInit {

  constructor(
    private config: AlertConfig,
    private alertRef: AlertRef
  ) {}

  ngOnInit(): void {
    console.log(this.config);
  }

  close(): void{
    this.alertRef.close("Alert Closed")
  }


}
