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
  limit = 4;
  offset = 0;

  sections = [
    {valor:'Characters'},
    {valor:'Comics'},
    {valor:'Series'}
  ];
  select = '';
  selections = 'Characters';

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

  selection(select: string) {
    if (this.select === 'Characters') {
      this.marvelService.getCharacters(4, 0)
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     .subscribe((data: any) => {
      this.news = data.data.results;
      this.offset += this.limit
     });
    } else if (this.select === 'Comics') {
      this.marvelService.getComics(4, 0)
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     .subscribe((data: any) => {
      this.news = data.data.results;
      this.offset += this.limit
     });
    } else if (this.select === 'Series') {
      this.marvelService.getSeries(4, 0)
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     .subscribe((data: any) => {
      this.news = data.data.results;
      this.offset += this.limit
     });
    }
    this.selections = select;
  }

  ngOnInit(): void {
    this.select = this.selections;
    this.marvelService.getCharacters(4, 0)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .subscribe((data: any) => {
     this.news = data.data.results;
     this.offset += this.limit
    });
  }

  onClick(select: string) {
    if (select === 'Characters') {
      this.marvelService.getCharacters(this.limit, this.offset)
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       .subscribe((data: any) => {
        this.news = data.data.results;
        this.offset += this.limit;
       });
    }
    if (select === 'Comics') {
      this.marvelService.getComics(this.limit, this.offset)
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       .subscribe((data: any) => {
        this.news = data.data.results;
        this.offset += this.limit;
       });
    }
    if (select === 'Series') {
      this.marvelService.getSeries(this.limit, this.offset)
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       .subscribe((data: any) => {
        this.news = data.data.results;
        this.offset += this.limit;
       });
    }
  }
}
