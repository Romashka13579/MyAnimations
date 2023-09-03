import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four-squares-to-screen',
  templateUrl: './four-squares-to-screen.component.html',
  styleUrls: ['./four-squares-to-screen.component.css']
})
export class FourSquaresToScreenComponent implements OnInit {
  ngOnInit(): void {
    var squares = document.querySelectorAll('.square');
    var covers = document.querySelectorAll('.square-card-cover');

    squares.forEach(square => {
      (square as HTMLInputElement).addEventListener('click', () => {
        var cover = square.querySelector('.square-card-cover');
        (square as HTMLInputElement).dataset.status = (square as HTMLInputElement).dataset.status == "opened" ? "closed" : "opened";
        (square as HTMLInputElement).dataset.status = (square as HTMLInputElement).dataset.status == "opened" ? (cover as HTMLInputElement).dataset.status = "covered" : (cover as HTMLInputElement).dataset.status = "uncovered";
        // covers.forEach(cover => {
        //   cover.addEventListener('transitionend', () => {
        //     (cover as HTMLInputElement).dataset.status = "uncovered";
        //   });
        // });
      });
    });
  }
}
