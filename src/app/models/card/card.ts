import { Task } from '../task/task';

export class Card {
  constructor(public id: string,
              public order: number,
              public name: string,
              public tasks: Task[]) {}
}
