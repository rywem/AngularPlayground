import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { inject, InjectionToken } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import { distinctUntilChanged, map, share, startWith } from "rxjs/operators";


const pageVisibility$ = fromEvent(documentRef, 'visibilitychange').pipe(
  startWith(0),
  map(() => documentRef.visibilityState !== 'hidden'),
  distinctUntilChanged(),
)

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.css']
})
export class VisibilityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


