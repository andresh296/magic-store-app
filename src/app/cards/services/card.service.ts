import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { CardDB } from '../interfaces/cards-db';

@Injectable({providedIn: 'root'})
export class CardsService {

  public apiUrl: string = 'http://localhost:8080/api/v1'

  constructor(private http: HttpClient) { }

  searchCardsCatalog(): Observable<CardDB[]> {
    const url = `${this.apiUrl}/from-db`;

    return this.http.get<CardDB[]>(url)
      .pipe(
        catchError(error => {
          return of([])
        })
      );
  }

  searchCardsCatalogByName(name: string): Observable<CardDB[]> {

    name = name.toLowerCase().replaceAll(' ', '_')

    const url = `${this.apiUrl}/from-db/${name}`;

    return this.http.get<CardDB[]>(url)
      .pipe(
        catchError(error => {
          return of([])
        })
      );
  }


}
