import { Observable, Subject } from "rxjs";
import { take } from "rxjs/operators";


export class AlertRef{
    private readonly _afterClose = new Subject<any>();
    afterClose: Observable<any> = this._afterClose.asObservable().pipe(take(1));

    constructor(){}

    close(result?:any){
        this._afterClose.next(result);
    }
}