import { Directive, Inject } from '@angular/core';
import { FocusService } from './focus.service';
import { Observable } from "rxjs";

@Directive({
  selector: '[focusWithin]',
  outputs: ["focusWithin"],
  providers: [FocusService]
})
export class FocusDirective {

  constructor(@Inject(FocusService) readonly focusWithin: Observable<Element | null>) { }

}
