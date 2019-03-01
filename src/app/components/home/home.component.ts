import { Component, OnInit  } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';
import {debounceTime, map, startWith, switchMap} from "rxjs/internal/operators";
import {Title} from "@angular/platform-browser";
import { Observable } from 'rxjs';
import { AuthService } from "../../services/auth.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public mov = new FormControl('');
  responseValue;
  constructor(private httpService: HttpService , public auth: AuthService) {
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

  ngOnInit() {
    this.mov.valueChanges.pipe(
      debounceTime(1000),
      switchMap(text => this.httpService.omdbiFilms(text))
    )
      .subscribe(res => {
        console.log(res);
        this.responseValue = res.Search;
      },
        err => console.error(err)
      );
  }
}
