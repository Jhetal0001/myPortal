import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {

  @Input() active = '';
  @Input() message = '';

  click() {
    if(this.active !== '') {
      setTimeout(() =>{
      this.active = '';
      this.message = '';}, 500)
    }
  }
}
