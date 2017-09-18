import { Component, OnInit, Input, Output } from '@angular/core';
import {MdSidenav} from "@angular/material";

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.sass']
})
export class AppbarComponent implements OnInit {

  @Input()
  sidenav: MdSidenav;

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav(event) {
    this.sidenav.mode = 'over';
    this.sidenav.toggle();
  }
}
