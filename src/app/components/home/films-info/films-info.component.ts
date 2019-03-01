import { Component, OnInit} from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { HttpService} from '../../../services/http.service';
import {FormControl} from "@angular/forms";import
{ StorageService} from '../../../services/storage.service';


@Component({
  selector: 'app-films-info',
  templateUrl: './films-info.component.html',
  styleUrls: ['./films-info.component.css']
})
export class FilmsInfoComponent implements OnInit {
  id: string;
  responseValue;
  constructor(private activatedRoute: ActivatedRoute, private storage: StorageService , private httpService: HttpService) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>
      this.id = params.id
    );
    this.Films();
  }
  addToFavourite({Poster, Title, Type, Genre, Runtime,  imdbID}) {
    const myFilms = this.storage.getListOfFilms();
    myFilms.every(el => el.imdbID !== imdbID) && this.storage.addFilm({Poster, Genre, Title, Type, Runtime, imdbID});
  }
  Films() {
      this.httpService.getFilmsById(this.id)
        .subscribe(
          res => {
            this.responseValue = res;
            console.log(res);
          },
          err => console.error(err)
        );
    }
}

