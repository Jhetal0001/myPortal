/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { animate, group, state, style, transition, trigger } from '@angular/animations';
import {
  Gallery,
  ImageItem
} from '@ngx-gallery/core';
import { InfoJhetalService } from '../../services/info-jhetal.service'
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-micv',
  animations: [
    trigger('enterAnimation', [
        state('void', style({
          opacity: 0,
          height: 0
        })),
        transition(':enter', [
          animate('300ms', style({
            opacity: 1,
            height: '*'
          }))
        ]),
        transition(':leave', [
          group([
            animate('300ms', style({
              opacity: 0,
              height: 0,
            }))
          ]),
        ])
      ]
    )
  ],
  templateUrl: './micv.component.html',
  styleUrls: ['./micv.component.scss'],
})
export class MicvComponent implements OnInit {

  loading$ = this.UTILS.loadind$;
  contentcv: any = {};
  dateperson: any = {};
  certificates: any;
  studies: any;
  abilities: any;

  constructor(
    public gallery: Gallery,
    private UTILS: UtilsService,
    private infoCv: InfoJhetalService
    ) {}

  setData(){
    this.certificates = Object.entries(this.contentcv.certificates.details).map(
      (i) => i[1]);
    this.studies = Object.entries(this.contentcv.studies.details).map((i) => i[1]);
    this.abilities = Object.entries(this.contentcv.abilities.details).map((i) => i[1]);
    this.UTILS.hideLoad();
  }

  openLigthbox(src: string){
    this.gallery.ref().setConfig({ thumb: false });
    const image = new ImageItem({ src: src });
    this.gallery.ref().load([image]);
  }

  infoJhetal() {
    this.infoCv.getInfoJhetal()
    .then(data => {
      const infoCv: any[] = [];
      data.forEach((info) => infoCv.push(info.data()))
      infoCv.forEach((info) => {
        this.contentcv = info.contentcv
        this.dateperson = info.dateperson
        this.setData();
      })
    })
    .catch(error => this.UTILS.showAlert(error.message, 'danger'))
  }

  viewTrue = '';
  view(section: string) {
    if (this.viewTrue !== section) {
       this.viewTrue = section;
    }else {
       this.viewTrue = '';
    }
  }

  ngOnInit(): void {
    this.UTILS.showLoad();
    this.infoJhetal();
  }
}
