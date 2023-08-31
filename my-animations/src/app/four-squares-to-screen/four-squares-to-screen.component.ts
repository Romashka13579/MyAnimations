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
      
        (square as HTMLInputElement).dataset.status = (square as HTMLInputElement).dataset.status == "opened" ? "closed" : "opened";
        console.log((square as HTMLInputElement).dataset.status);
        
      });
    });
    covers.forEach(cover => {
      cover.addEventListener('transitionend', () => {
        (cover as HTMLInputElement).dataset.status = "uncovered";
      });
    });
  }
}
