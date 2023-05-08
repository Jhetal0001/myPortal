import { Component, Input } from '@angular/core';
import { ProfileCertificate } from 'src/app/models/profile.model';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {

  @Input() title = '';
  @Input() content!: ProfileCertificate;

  listSchool = [
    {nombre_escuela: 'platzi', urlImg: 'https://static.platzi.com/static/images/footer/logo.png'}
  ]


}
