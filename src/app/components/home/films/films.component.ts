import { Component, OnInit  } from '@angular/core';
import { FormControl } from '@angular/forms';
import {debounceTime, map, startWith, switchMap} from 'rxjs/operators';
import {HttpService} from '../../../services/http.service';
import { Router, Params } from '@angular/router';
import {StorageService} from '../../../services/storage.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  favouriteFilms: [];
  setfilm: object;
  public mov = new FormControl('');
  responseValue;
  constructor(private httpService: HttpService, private router: Router, private storage: StorageService) {
  }
  getFavourites(item) {
    let flag = false;
    this.storage.getListOfFilms().forEach(({ imdbID }) => {
      if (imdbID === item.imdbID) {
        flag = true;
      }
    });
    return flag;
  }
  // getRequest() {
  //   this.httpService.omdbiFilms(this.mov.value)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.responseValue = res.Search;
  //       },
  //       err => console.error(err)
  //     );
  // }
  goProducts(id) {
    this.router.navigate([`/home/films-info/${id}`]);
  }
  ngOnInit() {
    this.mov.valueChanges.pipe(
      debounceTime(1000),
      switchMap(text => this.httpService.omdbiFilms(text))
    )
      .subscribe(res => {
        console.log(res);
        this.responseValue = res.Search;
      });
  }
  deleteFilm({imdbID}) {
    this.storage.deleteFilm(imdbID);
  }
  addToFavourite({Poster, Title, Type, Genre, Runtime,  imdbID}) {
    const myFilms = this.storage.getListOfFilms();
    myFilms.every(el => el.imdbID !== imdbID) && this.storage.addFilm({Poster, Genre, Title, Type, Runtime, imdbID});
  }
}
