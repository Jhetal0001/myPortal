import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  //mostrar menu
  menuShow = false;
  menuView() {
    this.menuShow = !this.menuShow;
  }

  searchShow = false;
  searchView() {
    this.searchShow = !this.searchShow;
  }

  @Output() theme = new EventEmitter();

  constructor() {}

  colorTheme: string = 'default';
  changeTheme(e: string) {
    this.theme.emit(e);
    this.colorTheme = e;
  }

  ngOnInit(): void {

  }
}

