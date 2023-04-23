import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-alerts',
  template: `<div [@fadeInOut] *ngIf="alert$ | async as alert" class="alert alert-{{ alert.type }}" role="alert">{{ alert.message }}</div>`,
  styles: [`div {width: 100%; position: fixed; top: 0; left: 0; z-index: 100; }`],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(300)),
    ]),
  ],
})
export class AlertsComponent implements OnInit {

  alert$ = this.utilsService.alert$;

  constructor(private utilsService: UtilsService) {}

  ngOnInit() {
    this.alert$.subscribe((alert) => {
      if (alert) {
        setTimeout(() => {
          this.utilsService.clearAlert();
        }, 3000);
      }
    });
  }

}
