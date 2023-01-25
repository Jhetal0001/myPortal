/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { doc, Firestore, onSnapshot } from '@angular/fire/firestore';
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
  private id: string;

  constructor (
    private userService: UserService,
    private firestore: Firestore
  ) {
    this.id = localStorage.getItem('id')!;
  }

  @Output() theme = new EventEmitter();

  colorTheme = 'default';
  changeTheme(e: string) {
    this.theme.emit(e);
    this.colorTheme = e;
  }

  ngOnInit(): void {
    onSnapshot(doc(this.firestore, "user", this.id), (result) => {
      const imgurl = result.data();
      this.imgProfile = imgurl?.['imgurl'];
    });
  }
}
