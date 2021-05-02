import { AfterViewInit, Component, Input } from '@angular/core';
import { SlideUpCard } from 'src/app/models/SlideUpCard.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('startTrigger', [
      state('none, void', style({
        transform: 'translateY(200%)'
      })),
      state('load', style({
        transform: 'translateY(0)'
      })),
      transition('none => load', animate('0.5s'))
    ])
  ]
})
export class CardComponent implements AfterViewInit {
  state:string='none';
  @Input() item: SlideUpCard;
  @Input() timing: number = 0;
  constructor() { }
  ngAfterViewInit(): void {
    setTimeout(()=> {
      this.state='load';
    }, this.timing*50);    
  }
}
