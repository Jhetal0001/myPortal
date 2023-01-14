export interface IThemeProperties {
  colorprimary: string;
  colorclaro: string;
  colorsucundary: string;
  colormedio: string;
  colorshadow: string;
  font1: string;
}

export interface ITheme {
  default: IThemeProperties;
  light?: IThemeProperties;
}
