import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent {

  constructor(
    private themeService: ThemeService,
    private userService: UserService,
    ){}

  changeTheme(theme: string): void {
    this.themeService.setTheme(theme);
  }

}
