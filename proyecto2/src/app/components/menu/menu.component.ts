import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    private modalService: NgbModal
    ){}

  abrirModal(modal: object) {
    this.modalService.open(modal, { centered: true });
  }
}
