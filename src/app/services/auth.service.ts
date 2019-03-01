import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Observable, Subject} from "rxjs/index";

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  private userDetails: firebase.User = null;


  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
  }
  isLoggedIn() {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }
  doRegistr(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        this.router.navigate(['/login']);
        console.log(  err.message);
      });
  }

  doLogin(email: string, password: string) {
     return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
       alert('cant find user');
        this.router.navigate(['/login']);
      });
  }
  logout() {
    this.firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/login']));
  }
}


