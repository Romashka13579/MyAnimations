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
    var topButtons = document.querySelectorAll('.top-button');

    squares.forEach(square => {
      (square as HTMLInputElement).addEventListener('click', () => {
      
        (square as HTMLInputElement).dataset.status = "opened";
        console.log((square as HTMLInputElement).dataset.status);
        
      });
    });
    covers.forEach(cover => {
      cover.addEventListener('transitionend', () => {
        (cover as HTMLInputElement).dataset.status = "uncovered";
      });
    });
    topButtons.forEach(topButton => {
      (topButton as HTMLInputElement).addEventListener('click', () => {
      
        (topButton as HTMLInputElement).dataset.status = "closed";
        console.log((topButton as HTMLInputElement).dataset.status);
        
      });
    });
  }
}
