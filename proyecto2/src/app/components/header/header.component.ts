import { Component, Output, EventEmitter } from '@angular/core';

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

  colorTheme = 'default';
  changeTheme(e: string) {
    this.theme.emit(e);
    this.colorTheme = e;
  }

}

