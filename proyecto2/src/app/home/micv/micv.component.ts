/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { animate, group, state, style, transition, trigger } from '@angular/animations';
import {
  Gallery,
  ImageItem
} from '@ngx-gallery/core';
import { UtilsService } from 'src/app/services/utils.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileAbilities, ProfileCertificate, ProfileData, ProfileExperience, ProfileProf, ProfileStudie } from 'src/app/models/profile.model';
import { DataCvService } from 'src/app/services/data-cv.service';

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

  loading$ = this.UTIL.loadind$;
  profileData!: ProfileData;
  profileProf!: ProfileProf;
  profileStudies!: ProfileStudie[];
  profileCertificates!: ProfileCertificate[];
  profileExperience!: ProfileExperience[];
  profileAbilities!: ProfileAbilities[];
  isAdmin!: boolean;
  notas = [
    {
      nota:`Es importante destacar que las variables presentadas a continuación, que indican los conocimientos y habilidades de un individuo, son una cuantificación subjetiva o consideración autónoma. Es decir, no están regidas por un marco o escala de valoración global que permita compararlas con otras personas o evaluarlas de manera objetiva.\n
        En lugar de ello, la valoración de cada habilidad es una apreciación personal que depende de múltiples factores, como la experiencia previa, la formación académica, el nivel de práctica, entre otros. Por lo tanto, dos personas pueden tener la misma habilidad pero valorarla de manera distinta, lo que no necesariamente indica que una sea mejor que la otra.\n
        Es importante comprender que estas variables son una manera de expresar las habilidades y conocimientos de un individuo, pero no representan una medición objetiva de su capacidad. Por lo tanto, es necesario tomar en cuenta el contexto en el que se presentan y no utilizarlas como una herramienta de comparación o evaluación entre distintas personas o candidatos.`
    }
  ]

  constructor(
    public gallery: Gallery,
    private UTIL: UtilsService,
    private dataCv: DataCvService,
    private modalService: NgbModal,
    ) {}

  openLigthbox(src: string){
    this.gallery.ref().setConfig({ thumb: false });
    const image = new ImageItem({ src: src });
    this.gallery.ref().load([image]);
  }

  viewTrue = '';
  view(section: string) {
    if (this.viewTrue !== section) {
       this.viewTrue = section;
    }else {
       this.viewTrue = '';
    }
  }

  abrirModal(modal: any) {
    this.modalService.open(modal, { centered: true });
  }
  async reloadGetInfo(){
    await this.getProfileStudies();
    await this.getProfileExperience();
    await this.getProfileCertificates();
    await this.getProfileAbilities();
    await this.getProfileData();
    await this.getProfileProf();
    this.UTIL.hideLoad();
  }
  async getProfileData() {
    await this.dataCv.getProfileData()
    .then(data => {
        this.profileData = {
          name: data.get('name'),
          lastname: data.get('lastname'),
          profession: data.get('profession'),
          phone: data.get('phone'),
          email: data.get('email'),
          departamento: data.get('departamento'),
          municipio: data.get('municipio'),
          photo: data.get('photo')
        }

    })
    .catch(error => {this.UTIL.showAlert(error.message, 'danger'); this.UTIL.hideLoad();})
  }
  async getProfileProf() {
    await this.dataCv.getProfileProf()
    .then(data => {
        let textProfile = data.get('text_profile');
        textProfile = Array.isArray(textProfile) ? textProfile.join("\n") : textProfile;
        this.profileProf = {
          text_profile: textProfile
        };

    })
    .catch(error => {this.UTIL.showAlert(error.message, 'danger'), this.UTIL.hideLoad();})
  }
  async getProfileStudies() {
    this.profileStudies = [];
    await this.dataCv.getProfileStudies()
    .then(data => {
      data.forEach(data2 => {
        const fechaInicio = data2.get("fecha_inicio");
        const fechaFin = data2.get("fecha_fin");
        const datos: ProfileStudie = {
          id: data2.id,
          titulo_obtenido: data2.get('titulo_obtenido'),
          nombre_institucion: data2.get('nombre_institucion'),
          fecha_inicio: new Date(fechaInicio),
          fecha_fin: fechaFin? new Date(fechaFin) : null,
          departamento: data2.get('departamento'),
          municipio: data2.get('municipio'),
          en_curso: data2.get('en_curso')
        };
        this.profileStudies.push(datos);
      });
    })
    .catch(error => {this.UTIL.showAlert(error.message, 'danger'); this.UTIL.hideLoad();})
  }
  async getProfileExperience() {
    this.profileExperience = [];
    await this.dataCv.getProfileExperience()
    .then(data => {
      data.forEach(data2 => {
        const fechaInicio = data2.get("fecha_inicio");
        const fechaFin = data2.get("fecha_fin");
        let arrayFunciones = data2.get('funciones_responsabilidades');
        arrayFunciones = Array.isArray(arrayFunciones)? arrayFunciones.join("\n") : arrayFunciones;
        const datos: ProfileExperience = {
          id: data2.id,
          nombre_empresa: data2.get('nombre_empresa'),
          cargo: data2.get('cargo'),
          fecha_inicio: new Date(fechaInicio),
          fecha_fin: fechaFin? new Date(fechaFin) : null,
          departamento: data2.get('departamento'),
          municipio: data2.get('municipio'),
          en_curso: data2.get('en_curso'),
          funciones_responsabilidades: arrayFunciones
        };
        this.profileExperience.push(datos);
      });
    })
    .catch(error => {this.UTIL.showAlert(error.message, 'danger'); this.UTIL.hideLoad();})
  }
  async getProfileCertificates() {
    this.profileCertificates = [];
    await this.dataCv.getProfileCertificates()
    .then(data => {
      data.forEach(data2 => {
        const fechaFin = data2.get("fecha_fin");
        const datos: ProfileCertificate = {
          id: data2.id,
          nombre_curso: data2.get('nombre_curso'),
          nombre_escuela: data2.get('nombre_escuela'),
          fecha_fin: new Date(fechaFin),
          categoria: data2.get('categoria'),
          url_certificado: data2.get('url_certificado')
        };
        this.profileCertificates.push(datos);
      });
    })
    .catch(error => {this.UTIL.showAlert(error.message, 'danger'); this.UTIL.hideLoad();})
  }
  async getProfileAbilities() {
    this.profileAbilities = [];
    await this.dataCv.getProfileAbilities()
    .then(data => {
      data.forEach(data2 => {
        const datos: ProfileAbilities = {
          id: data2.id,
          nombre_habilidad: data2.get('nombre_habilidad'),
          porcentaje: data2.get('porcentaje'),
        };
        this.profileAbilities.push(datos);
      });
    })
    .catch(error => {this.UTIL.showAlert(error.message, 'danger'); this.UTIL.hideLoad();})
  }

  ngOnInit(): void {
    this.UTIL.showLoad();
    this.reloadGetInfo()
    this.UTIL.role().subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
  }
}
