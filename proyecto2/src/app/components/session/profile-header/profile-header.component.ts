import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {
  //mostrar menu
  menuShow = false;
  menuView() {
    this.menuShow = !this.menuShow;
  }

  searchShow = false;
  searchView() {
    this.searchShow = !this.searchShow;
  }

  imgProfile: string | null | undefined;

  constructor (
    private userService: UserService
  ) {}

  @Output() theme = new EventEmitter();

  colorTheme = 'default';
  changeTheme(e: string) {
    this.theme.emit(e);
    this.colorTheme = e;
  }

  ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.userService.getUser(localStorage.getItem('id')!).then((data) => this.imgProfile = data?.imgurl)
  }
}
