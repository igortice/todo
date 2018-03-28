import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARD_MOCKS } from './card.mocks';
import { Task } from '../task/task';
import { v4 as uuid } from 'uuid';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class CardService {
  // cards: Card[] = [];
  cards: Card[] = CARD_MOCKS;

  constructor(private toastr: ToastrService) {}

  all(): Observable<Card[]> {
    return of(this.cards.slice()).delay(500);
  }

  create(): Observable<CardService> {
    const now         = Date.now();
    const pipe        = new DatePipe('pt-BR');
    const result_date = pipe.transform(now, 'short');

    this.cards.push(new Card(uuid(), this.cards.length + 1, `Card ${result_date}`, []));

    this.toastr.success('CARD CRIADO!', 'INSERSÃO!');

    return of(this).delay(500);
  }

  delete(id: string): Observable<CardService> {
    this.cards = this.cards.filter(card => card.id !== id);

    this.toastr.warning('CARD REMOVIDO!', 'DELEÇÃO!');

    return of(this).delay(500);
  }

  createTask(card: Card, desc: string): CardService {
    card.tasks.push(new Task(uuid(), card.tasks.length + 1, false, desc));

    this.toastr.success('TAREFA CRIADA!', 'INSERSÃO!');

    return this;
  }

  deleteTask(card: Card, taskId: string): CardService {
    card.tasks = card.tasks.filter(task => task.id !== taskId);

    this.toastr.warning('TASK REMOVIDA!', 'DELEÇÃO!');

    return this;
  }

  countTasks(card: Card): { ativo: number, inativo: number } {
    const quantidade_ativa   = card.tasks.filter(task => task.checked === true).length;
    const quantidade_inativa = card.tasks.filter(task => task.checked === false).length;

    return { ativo: quantidade_ativa, inativo: quantidade_inativa };
  }
}
