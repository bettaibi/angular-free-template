import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, OnDestroy, Type, ViewChild } from '@angular/core';
import { BnAlerDirective } from './bn-alert.directive';

@Component({
  selector: 'bn-alert',
  templateUrl: './bn-alert.component.html',
  styleUrls: ['./bn-alert.component.scss']
})
export class BnAlertComponent implements AfterViewInit, OnDestroy {
  childComponentType: Type<any>;

  @ViewChild(BnAlerDirective) alertContent: BnAlerDirective;
  public componentRef: ComponentRef<any>;

  constructor(
    private componentfactoryResolver: ComponentFactoryResolver,
    private changeRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.loadChildComponent(this.childComponentType);
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
