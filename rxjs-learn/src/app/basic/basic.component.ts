import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { of, from, PartialObserver, Observable, TeardownLogic, Subscriber } from 'rxjs';
import { filter, map } from "rxjs/operators";

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Example 1: Simplest Example 
  simplestExample() {
    of(1, 2, "three", true).subscribe(val => console.log(val));
  }

  // Example 2: Observer
  example2ObserverVar() {
    const array = ['one', 'two', 'three'];
    const Observer = {
      next: (val) => console.log(val),
      error: undefined,
      complete: undefined
    } as PartialObserver<string>

    from(array).subscribe(Observer);
  }

  example2ObserverObject() {
    const array = ['one', 'two', 'three'];
    from(array).subscribe(
      (val) => console.log(val),
      undefined,
      undefined
    );
  }

  // Add 'complete'
  example2ObserveComplete() {
    const array = ['one', 'two', 'three'];
    from(array).subscribe(
      (val) => console.log(val),
      undefined,
      () => console.log("Completed")
    );
  }

  // Example 3, Observable
  example3Observable() {
    const observable$ = new Observable<string>(subscriber => {
      subscriber.next('One');
      subscriber.next('Two');
      subscriber.next('Three');
      setTimeout(() => {
        subscriber.next('Four');
        subscriber.complete();
      }, 1000);
      setTimeout(() => {
        subscriber.error('Some Error');
      }, 2000)
    });

    const observer = {  
      next: (val) => console.log(val),
      error: (error) => console.log("Error to console ", error),
      complete: () => console.log('Completed')
    } as PartialObserver<string>

    observable$.subscribe(observer);
  }

  example3Teardown () {
    const subscribe = (subscriber: Subscriber<string>): TeardownLogic => {
      const intervalID = setInterval(() =>{
        console.log('Interval. Print Something')
      }, 500);

      ['One', 'Two', 'Three'].forEach(value => {
        subscriber.next(value + '_NEXT');
        
        if( value === 'This error will not be thrown') {
          subscriber.error('Some error');
        }
      });

      setTimeout(() => {
        console.log('Trigger complete() function');
        subscriber.complete();
      }, 2_000);

      // What should be done on 'clean-up' (after complete() function)
      return () => {
        clearInterval(intervalID);
        console.log('Cleaned');
      }
    }
    const myOwnObservable$ = new Observable(subscribe);

    myOwnObservable$.subscribe(
      (value) => console.log(value),
      (error) => console.log("Error: ", error ), //optional
      () => console.log(" subscriber.completed 2")
    );
    
  }

  // Example 4: Subscription

  example4Subscription () {
    const timer$ = new Observable<number>(subscriber => {
      let iteration = 0;
      const intervalId = setInterval(() => {
        if (iteration == 10) {
          subscriber.unsubscribe();
        }
        subscriber.next(iteration++);
      }, 500);

      return () => {
        clearInterval(intervalId);
        console.log("Cleaned");
      }
    });

    const observer = {
      next: (val) => console.log(val),
      error: (error) => console.log("Error to console:", error),
      complete: () => console.log('✅ Completed'),
   } as PartialObserver<number>

   timer$.subscribe(observer);
  }

  example5x1Pipe() {
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        map(value => value * 10),
        filter(value => value > 30 && value < 70)
      )
      .subscribe(
        val => console.log(val),
        error => console.log(error),
        () => console.log('completed')
      );
  }
}
