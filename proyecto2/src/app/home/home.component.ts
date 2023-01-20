import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private themeService: ThemeService) {}

  changeTheme(theme: string): void {
    this.themeService.setTheme(theme);
  }

}
