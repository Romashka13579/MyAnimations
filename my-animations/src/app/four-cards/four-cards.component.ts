import { Component } from '@angular/core';
import { BIGCARDS, SMALLCARDS } from '../four-cards-list';

@Component({
  selector: 'app-four-cards',
  templateUrl: './four-cards.component.html',
  styleUrls: ['./four-cards.component.css']
})
export class FourCardsComponent {
    bigCards = BIGCARDS;
    smallCards = SMALLCARDS;
}
