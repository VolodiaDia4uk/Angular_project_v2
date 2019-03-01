import { Component, OnInit } from '@angular/core';
import { StorageService} from '../../../services/storage.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { HttpService} from '../../../services/http.service';

@Component({
  selector: 'app-films-favourite',
  templateUrl: './films-favourite.component.html',
  styleUrls: ['./films-favourite.component.css']
})
export class FilmsFavouriteComponent implements OnInit {
  responseValue;
  constructor( private storage: StorageService,  private router: Router , private httpService: HttpService) { }
  ngOnInit() {
    this.responseValue = this.storage.getListOfFilms();
  }
  deleteFromFavourite({imdbID}) {
 this.storage.deleteFilm(imdbID);
 this.responseValue = this.storage.getListOfFilms();
  }
  goProducts(id) {
    this.router.navigate([`/home/films-info/${id}`]);
  }
 }
