import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { navigations } from 'src/app/models/navigation';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  isDarkModeActive = false;
  year = new Date().getFullYear();
  navigationList = navigations;
  currentActiveNavItem = 0;

  constructor(private breakpointObserver: BreakpointObserver) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  toggleTheme(): void{
    this.isDarkModeActive = !this.isDarkModeActive;
  }

  setActiveNavItem(newIndex: number): void{
    this.currentActiveNavItem = newIndex;
  }

}
