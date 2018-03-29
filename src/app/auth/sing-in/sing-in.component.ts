import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector:    'app-auth-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls:   [ './sing-in.component.scss' ]
})
export class SingInComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  loginGoogle() {
    this.authService.googleLogin();
  }

}
