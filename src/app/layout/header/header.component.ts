import { Component, OnInit } from '@angular/core';
import { system } from '../../../environments/system';

@Component({
  selector:    'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls:   [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  title = system.title;

  constructor() { }

  ngOnInit() {
  }

}
