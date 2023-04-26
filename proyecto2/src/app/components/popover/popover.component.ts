import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {

  @Input() title = '';
  @Input() content = {url: '', school: '', date: '' };

  listSchool = [
    {name: 'platzi', urlImg: 'https://static.platzi.com/static/images/footer/logo.png'}
  ]


}
