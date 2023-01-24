export interface News {
  name?: string;
  description?: string;
  thumbnail?: {path: string, extension: string};
  urls?: {url: string};
  title?: string
}
