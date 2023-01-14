import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private themeService: ThemeService) {}

  changeTheme(theme: string): void {
    console.log('Theme: ', theme);
    this.themeService.setTheme(theme);
  }

  ngOnInit(): void {
  }

}
