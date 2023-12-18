import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogCardsComponent } from './cards/pages/catalog-cards/catalog-cards.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogCardsComponent
  },
  {
    path: '**',
    redirectTo: 'catalog'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
