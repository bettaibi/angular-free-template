import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[alertContent]',
})
export class BnAlerDirective {

    constructor(public viewContainerRef: ViewContainerRef){}
}