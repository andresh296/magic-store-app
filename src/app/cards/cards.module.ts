import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogCardsComponent } from './pages/catalog-cards/catalog-cards.component';
import { NewCardsComponent } from './pages/new-cards/new-cards.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CatalogCardsComponent,
    NewCardsComponent,
    CardBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CatalogCardsComponent,
  ]
})
export class CardsModule { }
