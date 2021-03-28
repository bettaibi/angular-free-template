import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, of, pipe } from 'rxjs';
import { filter, map, catchError, retry } from 'rxjs/operators'
import { ajax, AjaxResponse } from 'rxjs/ajax'

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {
  myObservable: Observable<any>;
  myUnsubscription: Subscription;
  url = "https://jsonplaceholder.typicode.com/todos";

  constructor() {}

  ngOnInit(): void {
      this.myObservable = ajax(this.url).pipe(
        map((res: AjaxResponse)=>{
          if(!res.response){
            throw new Error('An error has been occured')
          }
          return res.response;
        }),
        retry(1),
        catchError(err => of([])),
      )
  }

  increment(): void{
    this.myUnsubscription = this.myObservable.subscribe((data)=>
    {console.log(data)},
    (err) => console.info(err.message),
    () => console.log('all tasks are completed')
    )
  }

  ngOnDestroy(): void{
    this.myUnsubscription.unsubscribe()
  }

}
