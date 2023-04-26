/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UtilsService } from '../services/utils.service';
import { Router } from '@angular/router';
import { InfoJhetalService } from '../services/info-jhetal.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

interface infoCV {
  contentcv: {
    abilities: {details: object},
    certificates: {details: [{name: string}], name: string},
    experience: object,
    profilepro: object,
    studies: object
  },
  dateperson: object,
  srcphoto: string,
  tittle: string
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  infoCV!: infoCV;
  valid= false;
  modalDate: any;
  formCert;
  isDisabled = false;
  isNew = false;

  dataInfo!: Observable<any[]>;

  constructor(private user: UserService, private UTIL: UtilsService, private route: Router,
    private infoCv: InfoJhetalService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private readonly firestore: Firestore
    ){
      this.infoJhetal()
      this.dataObservable()
      this.formCert = this.fb.group({
        name: '',
        date: '',
        school: '',
        tag: '',
        url: ''
      });
  }

  setDataTable(data: any){
    this.isDisabled = true;
      this.modalDate = data;
      this.formCert.setValue({
        name: data.name,
        date: data.date,
        school: data.school,
        tag: data.tag,
        url: data.url,
      });
      this.formCert.get('name')?.disable();
      this.formCert.get('date')?.disable();
      this.formCert.get('school')?.disable();
      this.formCert.get('tag')?.disable();
      this.formCert.get('url')?.disable();
  }
  newCertificate(){
    this.formCert = this.fb.group({
      name: '',
      date: '',
      school: '',
      tag: '',
      url: ''
    });
  }
  abrirModal(modal: any, data?: any) {
    if(data) {
      this.setDataTable(data);
      this.isNew = false;
    } else {
      this.newCertificate();
      this.modalDate = data;
      this.isNew = true;
    }
    this.modalService.open(modal, { centered: true });
  }

  guardarChangesCertificate(){
    const data = {
      name: this.formCert.value.name,
      date: this.formCert.value.date,
      school: this.formCert.value.school,
      tag: this.formCert.value.tag,
      url: this.formCert.value.url
    };
    return data;
  }

  guardarCambiosCert() {
    const data = this.guardarChangesCertificate();
    this.infoCv.newCertificate(data)
    .then(() => this.UTIL.showAlert('se completo exitosamente', 'success')).catch(error => this.UTIL.showAlert(error.message, 'danger'))
  }

  deleteCertificado() {
    const data = this.guardarChangesCertificate();
    this.infoCv.newCertificate(data)
    .then(item =>  {this.UTIL.showAlert('se completo exitosamente', 'success'); console.log('deleter', item)}).catch(error => this.UTIL.showAlert(error.message, 'danger'))
  }

  ngOnInit(): void {
    this.UTIL.showLoad();
  }

  logout(){
    this.UTIL.showLoad();
    this.user.logout().then(() => {
      this.UTIL.hideLoad();
      this.route.navigate(['admin-login'])
    }
    ).catch(error => {this.UTIL.showAlert(error.message, 'danger'); this.UTIL.hideLoad()})

  }

  infoJhetal() {
    this.infoCv.getInfoJhetal()
    .then(data => {
      const dataResult: any = [];
      data.forEach((info) => dataResult.push(info.data()))
      this.infoCV = dataResult[0];
      console.log("Info 1", this.infoCV)
      this.valid = true;
      this.UTIL.hideLoad();
    })
    .catch(error => {this.UTIL.showAlert(error.message, 'danger'); this.UTIL.hideLoad();})
  }
  dataObservable() {
    const q = query(collection(this.firestore, "info_profile"));
        onSnapshot(q, (data)=>{
        data.docChanges().forEach((change) => {
          if (change.type === "added") {
            const dataResult: any = [];
            data.forEach((info) => dataResult.push(info.data()))
            this.infoCV = dataResult[0];
            console.log("Info Observable: ", change.doc.data());
          }
          if (change.type === "modified") {
            const dataResult: any = [];
            data.forEach((info) => dataResult.push(info.data()))
            this.infoCV = dataResult[0];
          }
          if (change.type === "removed") {
            const dataResult: any = [];
            data.forEach((info) => dataResult.push(info.data()))
            this.infoCV = dataResult[0];
          }
      })
    })
  }

}
