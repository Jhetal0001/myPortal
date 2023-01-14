import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  @Output() closed = new EventEmitter();

  constructor() {}


  closedS() {
    this.closed.emit();
  }

  ngOnInit(): void {}
}
