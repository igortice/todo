import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-card',
  templateUrl: './card.component.html',
  styleUrls:   [ './card.component.scss' ]
})
export class CardComponent implements OnInit {
  loadingCards      = false;
  loadingCreateCard = false;

  constructor() { }

  ngOnInit() {
  }

  createCard(): void {
    this.loadingCreateCard = true;
  }

}
