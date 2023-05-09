export interface IThemeProperties {
  colorprimary: string;
  colorbg: string;
  colorsecundary: string;
  colorbutton: string;
  colorshadow: string;
  colorfontone: string;
  colorfonttwo: string;
  font1: string;
}

export interface ITheme {
  default: IThemeProperties;
  light?: IThemeProperties;
  blue?: IThemeProperties;
  purple?: IThemeProperties;
  purpleP?: IThemeProperties;
  green?: IThemeProperties;
  darkS?: IThemeProperties;
}
