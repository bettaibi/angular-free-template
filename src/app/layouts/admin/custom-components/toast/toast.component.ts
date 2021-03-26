import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, animate, style } from '@angular/animations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  player: AnimationPlayer;
  @ViewChild('para') element: ElementRef;

  constructor(
    private animationBuilder: AnimationBuilder
  ) {}

  ngOnInit(): void {
  }

  changeColor(): void{
    this.player = this.animationBuilder
    .build([
      // style({backgroundColor: 'lightblue'}),
      animate('1s ease', style({backgroundColor: 'green'}))
    ])
    .create(this.element.nativeElement);

    setTimeout(()=>{
      this.player.play();
   
    }, 0)
  }

}
