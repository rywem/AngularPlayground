import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css']
})
export class FocusComponent implements OnInit {
  focused: Element | null = null;
  constructor() { }

  ngOnInit(): void {
  }

  get name(): string {
    return this.focused ? this.focused.tagName : 'null';
  }

  onFocusWithin(focused: Element | null ) {
    this.focused = focused;
  }
}
