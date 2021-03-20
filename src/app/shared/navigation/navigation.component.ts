import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Navigation } from 'src/app/models/navigation';
import { Router } from '@angular/router';

@Component({
  selector: 'collapse-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() isOpen: boolean;
  @Input() nav: Navigation;
  @Output() setIsOpen = new  EventEmitter<number>(null);
  @Input() currentIndex: number;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toggle():void{
    if(this.nav.path){
      console.log(this.nav.path)
      this.router.navigateByUrl(this.nav.path);
      this.isOpen = true;
    }
    else{
      this.isOpen = !this.isOpen
    }
    this.setIsOpen.emit(this.currentIndex);
  }

}
