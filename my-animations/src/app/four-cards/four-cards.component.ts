import { Component } from '@angular/core';
import { CARDS } from '../four-cards-list';

@Component({
  selector: 'app-four-cards',
  templateUrl: './four-cards.component.html',
  styleUrls: ['./four-cards.component.css']
})
export class FourCardsComponent {
    cards = CARDS;
}
