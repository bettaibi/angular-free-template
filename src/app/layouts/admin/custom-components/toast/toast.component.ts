import { Component, OnInit } from '@angular/core';
import { customAnimations } from '@BN/animations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: customAnimations
})
export class ToastComponent implements OnInit {

  constructor(
   
  ) {}

  ngOnInit(): void {

  }

}
