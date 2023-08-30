import { Component, OnInit } from '@angular/core';
import { BIGCARDS, SMALLCARDS } from '../four-cards-list';

@Component({
  selector: 'app-four-cards',
  templateUrl: './four-cards.component.html',
  styleUrls: ['./four-cards.component.css']
})
export class FourCardsComponent implements OnInit {
  bigCards = BIGCARDS;
  smallCards = SMALLCARDS;

  ngOnInit(): void {
    var fourCards = document.querySelectorAll('[data-status]');
    var buttonN = document.querySelector('.next');
    var buttonB = document.querySelector('.back');

    var i = 0;

    fourCards.forEach(card => {
      if (card instanceof HTMLElement) {
        if (card.dataset.status == "active") {
          if (card.dataset.index)
            i = parseInt(card.dataset.index);
        }
        console.log(i);
      }
    });

    (buttonN as HTMLInputElement).addEventListener('click', () => {
      (fourCards[i] as HTMLInputElement).dataset.status = "after";
      i = i + 1 <= fourCards.length - 1 ? i + 1 : 0;
      (fourCards[i] as HTMLInputElement).dataset.status = "pre-before";
      setTimeout(() => {
        (fourCards[i] as HTMLInputElement).dataset.status = "active";
      });
    });
    (buttonB as HTMLInputElement).addEventListener('click', () => {
      (fourCards[i] as HTMLInputElement).dataset.status = "before";
      i = i - 1 >= 0 ? i - 1 : fourCards.length - 1;
      (fourCards[i] as HTMLInputElement).dataset.status = "pre-after";
      setTimeout(() => {
        (fourCards[i] as HTMLInputElement).dataset.status = "active";
      });
    });

  }
}
