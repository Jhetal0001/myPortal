import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ title }}</h4>
      <button type="button" class="btn-close btn-close-white" aria-label="Close" (click)="cancel()"></button>
    </div>
    <div class="modal-body">
      <p>{{ message }}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="cancel()">Cancelar</button>
      <button type="button" class="btn btn-primary" (click)="confirm()">Aceptar</button>
    </div>`
})
export class ConfirmModalComponent {

  @Input() title!: string;
  @Input() message!: string;

  constructor(public activeModal: NgbActiveModal) {}


  confirm() {
    this.activeModal.close('confirm');
  }

  cancel() {
    this.activeModal.dismiss('cancel');
  }

}
