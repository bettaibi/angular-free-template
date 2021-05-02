import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/animations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('fadeColor', [

      transition(':enter', [
        style({ backgroundColor: 'red'}),
        animate('1s ease-out', style({ backgroundColor: 'green'}))
      ]),
      transition(':leave', [
        style({ backgroundColor: 'green'}),
        animate('1s ease-out', style({ backgroundColor: 'red'}))
      ]),
    ])
  ]
})
export class ToastComponent implements OnInit {

  constructor(
   
  ) {}

  ngOnInit(): void {

  }

}
