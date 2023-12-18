import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/card.service';
import { CardDB } from '../../interfaces/cards-db';

@Component({
  selector: 'catalog-cards',
  templateUrl: './catalog-cards.component.html',
  styles: ``
})
export class CatalogCardsComponent implements OnInit {

  public cardsList: CardDB[] = []

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.searchCards();
  }

  searchCards() {
    this.cardsService.searchCardsCatalog().subscribe( cards => {
      this.cardsList = cards;
    });
  }

  searchByID(name: string) {
    if (name.length === 0) {
      this.searchCards();
      return
    }

    this.cardsService.searchCardsCatalogByName(name).subscribe( cards => {
      this.cardsList = cards;
    });
  }
}
