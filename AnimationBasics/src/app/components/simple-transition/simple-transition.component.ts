import { Component, OnInit } from '@angular/core';
import { state, style } from '@angular/animations';
@Component({
  selector: 'app-simple-transition',
  templateUrl: './simple-transition.component.html',
  styleUrls: ['./simple-transition.component.css'],
  animations: [
    state,
    style
  ]
})
export class SimpleTransitionComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  
  open() {
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    }));
  }

  close() {
    state('closed', style({
      height: '100px',
      opacity: 0.5,
      backgroundColor: 'green'
    }));
  }
}
