import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.user = afAuth.authState;
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

  googleLogin(): void {
    const provider = new firebase.auth.GoogleAuthProvider();

    this.oAuthLogin(provider)
      .then(value => {
        console.log('The given name is ' + value.additionalUserInfo.profile.given_name);
        this.toastr.success('Login realizado com êxito!', 'Login!');

        this.router.navigate([ '/' ]);
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }

  logout(): void {
    this.afAuth.auth.signOut().then(() => {
      this.toastr.warning('Logout realizado com êxito!', 'Logout!');

      this.router.navigate([ '/auth/login' ]);
    });
  }

  isAuthenticated(): boolean {
    return this.userDetails !== null;
  }

  get currentUserObservable(): Observable<firebase.User> {
    return this.user;
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }

}
