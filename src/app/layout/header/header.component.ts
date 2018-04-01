import { Component, OnInit } from '@angular/core';
import { system } from '../../../environments/system';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector:    'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls:   [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  title = system.title;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
