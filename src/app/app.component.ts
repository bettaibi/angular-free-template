import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private sharedSrvice: SharedService
  ){}


  say(msg: string) :void{
    this.sharedSrvice.showMsg(msg)
  }
}
