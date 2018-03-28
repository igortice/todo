import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card/card';
import { SortablejsOptions } from 'angular-sortablejs';
import { CardService } from '../../models/card/card.service';

@Component({
  selector:    'app-card',
  templateUrl: './card.component.html',
  styleUrls:   [ './card.component.scss' ]
})
export class CardComponent implements OnInit {
  editCardName: boolean[]      = [];
  cards: Card[]                = [];
  loadingCards                 = false;
  loadingCreateCard            = false;
  loadingRemoveCard: boolean[] = [];


  optionCards: SortablejsOptions = {};

  optionTasks: SortablejsOptions = {
    group: 'tasks'
  };

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.loadingCards = true;

    this.cardService.all().subscribe(
      result => this.cards = result,
      () => {},
      () => this.loadingCards = false
    );
  }

  createCard(): void {
    this.loadingCreateCard = true;

    this.cardService.create().subscribe(
      result => this.cards = result.cards,
      () => {},
      () => this.loadingCreateCard = false
    );
  }

  removeCard(id: string, index: number): void {
    this.loadingRemoveCard[ index ] = true;

    this.cardService.delete(id).subscribe(
      result => this.cards = result.cards,
      () => {},
      () => this.loadingRemoveCard[ index ] = false
    );
  }

  createTask(card: Card, input: HTMLInputElement): void {
    const taskValue = ( <HTMLInputElement>input ).value;
    if (taskValue) {
      this.cardService.createTask(card, taskValue);
      input.value = '';
    }
  }

  removeTask(card: Card, taskId: string): void {
    this.cardService.deleteTask(card, taskId);
  }

  countTask(card: Card): { ativo: number, inativo: number } {
    return this.cardService.countTasks(card);
  }

  hasCards(): boolean {
    return this.cards.length > 0;
  }
}
