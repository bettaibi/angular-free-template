import { Component, ChangeDetectorRef, DoCheck } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { SplashScreenService } from './services/splash-screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {

  constructor(
    public loaderService: LoaderService,
    private splashScreenService: SplashScreenService,
    private changeRef: ChangeDetectorRef
  ){}


  ngDoCheck(): void{
    this.changeRef.detectChanges();
  }

}
