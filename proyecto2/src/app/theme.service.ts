import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { IThemeProperties } from './itheme.interface';
import { THEMES } from './theme-config';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  setTheme(name: string): void {
    const theme: IThemeProperties = (THEMES as any)[name];
    Object.keys(theme).forEach((key: string) => {
      this.document.documentElement.style.setProperty(
        `--${key}`,
        (theme as any)[key]
      );
    });
  }
}
