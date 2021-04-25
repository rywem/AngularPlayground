import { DOCUMENT } from "@angular/common";
import { ElementRef, Inject, Injectable } from "@angular/core";
import { defer, fromEvent, merge, Observable, of } from "rxjs";
import { debounceTime, distinctUntilChanged, map, mapTo } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FocusWithinService extends Observable<boolean>{

  constructor(@Inject(DOCUMENT) documentRef: Document, { nativeElement }: ElementRef<HTMLElement>) {
    const focused$ = merge(
      defer(() => of(nativeElement.contains(documentRef.activeElement))),
      fromEvent(nativeElement, "focusin").pipe(mapTo(true)),
      fromEvent(nativeElement, "focusout").pipe(
        map(({ relatedTarget }) => nativeElement.contains(relatedTarget))
      )
    ).pipe(distinctUntilChanged());

    super(subscriber => focused$.subscribe(subscriber));
  }
}
