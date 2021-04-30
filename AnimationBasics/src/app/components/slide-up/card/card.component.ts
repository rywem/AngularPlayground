import { Component, Input, OnInit } from '@angular/core';
import { SlideUpCard } from 'src/app/models/SlideUpCard.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() item: SlideUpCard;

  constructor() { }

  ngOnInit(): void {
  }

}
