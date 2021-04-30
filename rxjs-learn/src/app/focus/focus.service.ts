import { DOCUMENT } from "@angular/common";
import { ElementRef, Inject, Injectable } from "@angular/core";
import { defer, fromEvent, merge, Observable, of } from "rxjs";
import { debounceTime, distinctUntilChanged, map, mapTo } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FocusService extends Observable<Element | null> {

  constructor(@Inject(DOCUMENT) documentRef: Document,
  { nativeElement }: ElementRef<HTMLElement>
  ) { 
    /*
    const focused$ = merge(
      defer(() => of(nativeElement.contains(documentRef.activeElement))),
      fromEvent(nativeElement, "focusin").pipe(mapTo(true)),
      fromEvent<FocusEvent>(nativeElement, "focusout").pipe(
        map(({ relatedTarget }) =>
          nativeElement.contains(relatedTarget as Node)
        )
      )
    ).pipe(distinctUntilChanged());
    */

    const final$ = merge(
      fromEvent(documentRef, "focusin"),
      fromEvent(documentRef, "focusout"),
      of(null)
    ).pipe(
      debounceTime(0),
      map(() =>
        nativeElement.contains(documentRef.activeElement)
          ? documentRef.activeElement
          : null
      ),
      distinctUntilChanged()
    );
    // Beware of NgZone!

    super(subscriber => final$.subscribe(subscriber));
  }
}
