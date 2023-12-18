import { Component, Input } from '@angular/core';
import { CardDB } from '../../interfaces/cards-db';

@Component({
  selector: 'cards-box',
  templateUrl: './card-box.component.html',
  styles: ``
})
export class CardBoxComponent {

  @Input()
  public card!: CardDB;

}
