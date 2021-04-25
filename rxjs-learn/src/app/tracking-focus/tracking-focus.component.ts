import { DOCUMENT } from "@angular/common";
import { ElementRef, Inject, Injectable } from "@angular/core";
import { defer, fromEvent, merge, Observable, of } from "rxjs";
import { debounceTime, distinctUntilChanged, map, mapTo } from "rxjs/operators";


@Component({
  selector: 'app-tracking-focus',
  templateUrl: './tracking-focus.component.html',
  styleUrls: ['./tracking-focus.component.css']
})
export class TrackingFocusComponent implements OnInit {
  
  docRef: Document;
  nativeEl: ElementRef<HTMLElement>;
  constructor(@Inject(DOCUMENT) documentRef: Document, { nativeElement }: ElementRef<HTMLElement>) { 
    this.docRef = documentRef;
    this.nativeEl = { nativeElement };
  }

  ngOnInit(): void {
  }

  getDocument() {
    const focused$ = merge(
      defer(() => of(this.nativeEl.contains(this.docRef.activeElement))),
      fromEvent(this.nativeEl, "focusin").pipe(mapTo(true)),
      fromEvent(this.nativeEl, "focusout").pipe(
        map(({ relatedTarget }) => nativeElement.contains(relatedTarget))
      )
    ).pipe(distinctUntilChanged());
  }
  getElement() {
    //console.log(nativeElement)
  }
}
