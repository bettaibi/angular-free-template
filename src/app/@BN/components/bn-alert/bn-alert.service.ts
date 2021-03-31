import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type } from '@angular/core';
import { AlertInjector } from './alert-injector';
import { AlertRef } from './alert-ref';
import { AlertConfig } from './bn-alert-config';
import { BnAlertComponent } from './bn-alert.component';

@Injectable()
export class BnAlertService {

    private AlertComponentRef: ComponentRef<BnAlertComponent>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {}

    private appendAlertComponentToBody(config: AlertConfig){
        const weakMap = new WeakMap();
        weakMap.set(AlertConfig, config || {});

        const alertRef = new AlertRef();
        weakMap.set(AlertRef, alertRef);

        const sub = alertRef.afterClose.subscribe(()=>{
            this.removeAlertComponentFromBody();
            sub.unsubscribe();
        });

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BnAlertComponent);
        const componentRef = componentFactory.create(new AlertInjector(this.injector, weakMap));
        this.appRef.attachView(componentRef.hostView);
        console.log(this.appRef)
      
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);
      
        this.AlertComponentRef = componentRef;

        return alertRef;
    }

    private removeAlertComponentFromBody() {
        this.appRef.detachView(this.AlertComponentRef.hostView);
        this.AlertComponentRef.destroy();
    }

    public open(componentType: Type<any>, config?: AlertConfig) {
        const ref = this.appendAlertComponentToBody(config);
        this.AlertComponentRef.instance.childComponentType = componentType;
        return ref;
    }

}