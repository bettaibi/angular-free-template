import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SplashScreenService {
    splashScreenElement: any;
    player: AnimationPlayer;

    constructor(
        @Inject(DOCUMENT) private _document: any,
        private router: Router,
        private animationBuilder: AnimationBuilder

    ){
        this._init();
    }

    private _init(): void{
        this.splashScreenElement = this._document.body.querySelector('#app-splash-screen');

        if(this.splashScreenElement){
            this.router.events.pipe(
                filter((event => event instanceof NavigationEnd)),
                take(1)
            ).subscribe(() => {
                setTimeout(()=>{
                    this.hide();
                },0)
            })
        }
    }

    show(): void{
        this.player = this.animationBuilder
        .build([
            style({opacity: '0'}),
            animate('500ms ease', style({opacity: '1'}))
        ]).create(this.splashScreenElement);

        setTimeout(()=>{
            this.player.play();
        },0);
    }

    hide(): void{
        this.player = this.animationBuilder
        .build([
            style({opacity: '1'}),
            animate('500ms ease', style({opacity: '0'}))
        ]).create(this.splashScreenElement);

        setTimeout(()=>{
            this.player.play();
        },0);
    }
}