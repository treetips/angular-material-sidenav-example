import { Component, OnInit, Input } from '@angular/core';
import {MdSidenav} from "@angular/material";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {

  @Input()
  sidenav: MdSidenav;

  constructor() { }

  ngOnInit() {
  }

  handleClickMenu(event) {
    if (this.sidenav.mode === 'over')
      this.sidenav.close();
  }
}
