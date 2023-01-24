import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(
    private http: HttpClient,
  ) { }

  getCharacters(limit: number, offset: number) {
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?apikey=7dfc2dd29a01587d0ed89ea0ceb864ff',{
      params: {
        limit: limit,
        offset: offset
      }})
  }
  getComics(limit: number, offset: number) {
    return this.http.get('https://gateway.marvel.com:443/v1/public/comics?apikey=7dfc2dd29a01587d0ed89ea0ceb864ff',{
      params: {
        limit: limit,
        offset: offset
      }})
  }
  getSeries(limit: number, offset: number) {
    return this.http.get('https://gateway.marvel.com:443/v1/public/series?apikey=7dfc2dd29a01587d0ed89ea0ceb864ff',{
      params: {
        limit: limit,
        offset: offset
      }})
  }
}
