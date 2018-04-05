import { Injectable } from '@angular/core';
import { Card } from './card';
import { Task } from '../task/task';
import { v4 as uuid } from 'uuid';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class CardService {
  cards: AngularFireList<Card> = null;
  userId: string;

  // cards: Card[] = CARD_MOCKS;

  constructor(
    private toastr: ToastrService,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
    this.userId = this.authService.userDetails.uid;
    this.cards  = this.db.list<Card>(`cards/${this.userId}`);
  }

  all(): Observable<Card[]> {
    return this.cards.snapshotChanges().map(changes => {
      return changes.map(card => ( new Card(card.payload.key, card.payload.val().name, ( card.payload.val().tasks || [] )) ));
    });
  }

  create(): Observable<Card[]> {
    const now         = Date.now();
    const pipe        = new DatePipe('pt-BR');
    const result_date = pipe.transform(now, 'short');

    this.cards.push(new Card(null, `Card ${result_date}`, []));

    this.toastr.success('CARD CRIADO!', 'INSERSÃO!');

    return this.cards.valueChanges();
  }

  delete(id: string): Observable<Card[]> {
    this.cards.remove(id);

    this.toastr.warning('CARD REMOVIDO!', 'DELEÇÃO!');

    return this.cards.valueChanges();
  }

  createTask(card: Card, desc: string): CardService {
    card.tasks.push(new Task(`${uuid()}`, false, `${desc}`));

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
