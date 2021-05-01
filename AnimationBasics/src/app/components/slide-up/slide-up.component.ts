import { Component, OnInit } from '@angular/core';
import { SlideUpCard } from 'src/app/models/SlideUpCard.model';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-slide-up',
  templateUrl: './slide-up.component.html',
  styleUrls: ['./slide-up.component.css']
})
export class SlideUpComponent implements OnInit {

  cards: SlideUpCard[];
  constructor() { 
    this.cards = [];
    this.loadCards();
  }

  ngOnInit(): void {
  }

  loadCards() {
    this.cards = [
      { name: "Tacos", quantity: 5},
      { name: "Chow Mein", quantity: 1},
      { name: "Paper Clips", quantity: 15},
      { name: "News Papers", quantity: 2},
      { name: "Plastic Cups", quantity: 3}
    ]
  }

}
