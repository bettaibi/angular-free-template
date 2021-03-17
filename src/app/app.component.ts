import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(
    public loaderService: LoaderService,
    private changeRef: ChangeDetectorRef
  ){}


  ngAfterViewInit(): void{
    this.changeRef.detectChanges();
  }

}
