/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: News[] ;
  limit = 20;
  offset = 0;

  sections = [
    {valor:'Characters'},
    {valor:'Comics'},
    {valor:'Series'}
  ];
  select = 'Characters';

  constructor(
    private marvelService :MarvelService,
  ) {
    this.news = [{
      name: '',
      description: '',
      thumbnail: {path: '', extension: ''},
      urls: {url: ''},
    }];
  }

  ngOnInit(): void {
    this.marvelService.getCharacters(40, 0)
    .subscribe((data: any) => {
     this.news = data.data.results;
    });
  }

  onClick(select: string) {
    if (select === 'Characters') {
      this.marvelService.getCharacters(this.limit, this.offset)
       .subscribe((data: any) => {
        this.news = data.data.results;
       });
    }
    if (select === 'Comics') {
      this.marvelService.getComics(this.limit, this.offset)
       .subscribe((data: any) => {
        this.news = data.data.results;
       });
    }
    if (select === 'Series') {
      this.marvelService.getSeries(this.limit, this.offset)
       .subscribe((data: any) => {
        this.news = data.data.results;
       });
    }
    this.offset += this.limit;
  }
}
