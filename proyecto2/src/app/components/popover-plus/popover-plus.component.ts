import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { THEMES } from 'src/app/theme-config';

@Component({
  selector: 'app-popover-plus',
  templateUrl: './popover-plus.component.html',
  styleUrls: ['./popover-plus.component.scss']
})
export class PopoverPlusComponent {

  temas: string[] = [];

  constructor(private theme: ThemeService){
    this.temas = Object.keys(THEMES);
  }

  changeTheme(theme: string) {
    this.theme.setTheme(theme);
  }
}
