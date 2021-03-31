import { trigger, animate, style, transition} from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, OnDestroy, Type, ViewChild } from '@angular/core';
import { BnAlerDirective } from './bn-alert.directive';


type AlertMode = 'success' | 'info' | 'danger' | 'warn' | 'default';

@Component({
  selector: 'bn-alert',
  templateUrl: './bn-alert.component.html',
  styleUrls: ['./bn-alert.component.scss'],
  animations: [
    trigger('slideInOut', [

      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(100px)'
        }),
        animate('500ms ease', style({
          opacity: 1,
          transform: 'translateX(0)'
        }))
      ]),

      transition('* => void', [
        style({
          opacity: 1,
          transform: 'translateX(0)'
        }),
        animate('500ms ease', style({
          opacity: 0,
          transform: 'translateX(100px)'
        }))
      ])
    ])
  ]
})
export class BnAlertComponent implements AfterViewInit, OnDestroy {

  alertProps: AlertProp;

  childComponentType: Type<any>;

  @ViewChild(BnAlerDirective) alertContent: BnAlerDirective;
  public componentRef: ComponentRef<any>;

  constructor(
    private componentfactoryResolver: ComponentFactoryResolver,
    private changeRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.loadChildComponent(this.childComponentType);
    this.alertProps = {
      css: this.alertProps.css || { width: '300px' },
      mode: this.alertProps.mode || 'success'
    };
    this.changeRef.detectChanges();
  }

  onAlertClicked(e: any): void{
    e.stopPropagation();
  }

  loadChildComponent(childComponent: Type<any>): void{
    let componentFactory = this.componentfactoryResolver.resolveComponentFactory(childComponent);

    let viewContainerRef = this.alertContent.viewContainerRef;

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  ngOnDestroy(): void{
    if(this.componentRef){
      this.componentRef.destroy();
    }
  }

}

interface AlertProp{
  mode: AlertMode;
  css: any;
}

