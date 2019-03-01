import { Injectable } from '@angular/core';
import { FilmsModel} from './films-model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  favouriteFilms: FilmsModel[];
  constructor() {
    this.favouriteFilms = JSON.parse(localStorage.getItem('items')) || [];
  }
  getListOfFilms() {
    return this.favouriteFilms;
  }

  deleteFilm(id: string) {
    this.favouriteFilms = this.favouriteFilms.filter(({ imdbID }) => imdbID !== id );
    localStorage.setItem('items', JSON.stringify(this.favouriteFilms));
  }
  addFilm(film: FilmsModel) {
    this.favouriteFilms.unshift(film);
    return localStorage.setItem('items', JSON.stringify(this.favouriteFilms));
  }
}
