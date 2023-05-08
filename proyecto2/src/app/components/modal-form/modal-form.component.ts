import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CiudadesColombiaService } from '../../services/ciudades-colombia.service';
import { Departments, Cities} from '../../models/departments.model';
import { ProfileAbilities, ProfileCertificate, ProfileExperience, ProfileStudie } from 'src/app/models/profile.model';
import { DataCvService } from '../../services/data-cv.service';
import { UtilsService } from 'src/app/services/utils.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})

export class ModalFormComponent implements OnInit {

  profileData!: FormGroup;
  profileProf!: FormGroup;
  profileStudies!: FormGroup;
  profileCertificates!: FormGroup;
  profileExperience!: FormGroup;
  profileAbilities!: FormGroup;
  listaDepartaments: Departments[] = [];
  listaCiudades: Array<Cities> = [];
  departamentoSeleccionado = '';
  ciudades: Array<Cities> = [];
  selectedStudy: string | undefined;
  selectedExperience: string | undefined;
  selectedCertificate: string | undefined;
  selectedAbilitie: string | undefined;
  itemsProfileStudies: Array<ProfileStudie> = [];
  itemsProfileExperience: Array<ProfileExperience> = [];
  itemsProfileCertificates: Array<ProfileCertificate> = [];
  itemsProfileAbilities: Array<ProfileAbilities> = [];

  constructor(
    private fb: FormBuilder,
    private ciudadesColombia: CiudadesColombiaService,
    private dataCv: DataCvService,
    private UTIL: UtilsService,
    private modalService: NgbModal
    ) {
      this.getListaCiudadesDepartamentos();
    }

  ngOnInit() {
    this.formsCV()
    this.reloadGetInfo();
  }

  //Formularios Reactivos
  formsCV(){
    this.profileData = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      profession: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      departamento: new FormControl('Departamento'),
      municipio: new FormControl('Ciudad')
    });
    this.profileProf = this.fb.group({
      text_profile: new FormControl('', [Validators.required, Validators.minLength(30)])
    });
    this.profileStudies = this.fb.group({
      nombre_institucion: new FormControl('', [Validators.required, Validators.minLength(3)]),
      departamento: new FormControl('Departamento'),
      municipio: new FormControl('Ciudad'),
      fecha_inicio: new FormControl('', [Validators.required, Validators.minLength(3)]),
      fecha_fin: new FormControl('', [Validators.required, Validators.minLength(3)]),
      titulo_obtenido: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
    this.profileCertificates = this.fb.group({
      nombre_curso: new FormControl('', [Validators.required, Validators.minLength(3)]),
      fecha_fin: new FormControl('', [Validators.required, Validators.minLength(3)]),
      nombre_escuela: new FormControl('', [Validators.required, Validators.minLength(3)]),
      categoria: new FormControl('', [Validators.required, Validators.minLength(3)]),
      url_certificado: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
    this.profileExperience = this.fb.group({
      nombre_empresa: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cargo: new FormControl('', [Validators.required, Validators.minLength(3)]),
      departamento: new FormControl('Departamento'),
      municipio: new FormControl('Ciudad'),
      fecha_inicio: new FormControl('', [Validators.required, Validators.minLength(3)]),
      fecha_fin: new FormControl('', [Validators.required, Validators.minLength(3)]),
      funciones_responsabilidades: new FormControl(''),
    });
    this.profileAbilities = this.fb.group({
      nombre_habilidad: new FormControl('', [Validators.required, Validators.minLength(3)]),
      porcentaje: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  //Metodos para traer la data de los formularios
  reloadGetInfo(){
    this.disableForms()
    this.getProfileStudies();
    this.getProfileExperience();
    this.getProfileCertificates();
    this.getProfileAbilities();
    this.getProfileData();
    this.getProfileProf()
  }
  getProfileData() {
    this.dataCv.getProfileData()
    .then(data => {
        this.profileData.patchValue({
          name: data.get('name'),
          lastname: data.get('lastname'),
          profession: data.get('profession'),
          phone: data.get('phone'),
          email: data.get('email'),
          departamento: data.get('departamento'),
          municipio: data.get('municipio')
        });
        this.UTIL.hideLoad();
    })
    .catch(error => {this.UTIL.showAlert(error.message, 'danger'); this.UTIL.hideLoad();})
  }
  getProfileProf() {
    this.dataCv.getProfileProf()
    .then(data => {
        let textProfile = data.get('text_profile');
        textProfile = Array.isArray(textProfile) ? textProfile.join("\n") : textProfile;
        this.profileProf.patchValue({
          text_profile: textProfile
        });
        this.UTIL.hideLoad();
    })
    .catch(error => {this.UTIL.showAlert(error.message, 'danger'), this.UTIL.hideLoad();})
  }
  getProfileStudies() {
    this.itemsProfileStudies = [];
    this.dataCv.getProfileStudies()
    .then(data => {
      data.forEach(data2 => {
        const fechaInicio = data2.get("fecha_inicio");
        const fechaFin = data2.get("fecha_fin");
        const datos: ProfileStudie = {
          id: data2.id,
          titulo_obtenido: data2.get('titulo_obtenido'),
          nombre_institucion: data2.get('nombre_institucion'),
          fecha_inicio: new Date(fechaInicio),
          fecha_fin: new Date(fechaFin),
          departamento: data2.get('departamento'),
          municipio: data2.get('municipio')
        };
        this.itemsProfileStudies.push(datos);
      });
      this.UTIL.hideLoad();
    })
    .catch(error => {this.UTIL.showAlert(error.message, 'danger'); this.UTIL.hideLoad();})
  }
  getProfileExperience() {
    this.itemsProfileExperience = [];
    this.dataCv.getProfileExperience()
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
          fecha_fin: new Date(fechaFin),
          departamento: data2.get('departamento'),
          municipio: data2.get('municipio'),
          funciones_responsabilidades: arrayFunciones
        };
        this.itemsProfileExperience.push(datos);
      });
      this.UTIL.hideLoad();
    })
    .catch(error => {this.UTIL.showAlert(error.message, 'danger'); this.UTIL.hideLoad();})
  }
  getProfileCertificates() {
    this.itemsProfileCertificates = [];
    this.dataCv.getProfileCertificates()
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
        this.itemsProfileCertificates.push(datos);
      });
      this.UTIL.hideLoad();
    })
    .catch(error => {this.UTIL.showAlert(error.message, 'danger'); this.UTIL.hideLoad();})
  }
  getProfileAbilities() {
    this.itemsProfileAbilities = [];
    this.dataCv.getProfileAbilities()
    .then(data => {
      data.forEach(data2 => {
        const datos: ProfileAbilities = {
          id: data2.id,
          nombre_habilidad: data2.get('nombre_habilidad'),
          porcentaje: data2.get('porcentaje'),
        };
        this.itemsProfileAbilities.push(datos);
      });
      this.UTIL.hideLoad();
    })
    .catch(error => {this.UTIL.showAlert(error.message, 'danger'); this.UTIL.hideLoad();})
  }
  getListaCiudadesDepartamentos(){
    this.ciudadesColombia.getDepartamento().subscribe((data: Departments[] | unknown) => {
      if (typeof data === 'undefined' || !Array.isArray(data)) {
        this.listaDepartaments = [];
      } else {
        this.listaDepartaments = data;
      }
    })
    this.ciudadesColombia.getCiudades().subscribe((data: Cities[] | unknown) => {
      if (typeof data === 'undefined' || !Array.isArray(data)) {
        this.listaCiudades = [];
      } else {
        this.listaCiudades = data;
      }
    })
  }
  // metodo para deshabilitar los campos de los fomularios
  disableForms() {
    this.profileData.disable();
    this.profileProf.disable();
    this.profileStudies.disable();
    this.profileCertificates.disable();
    this.profileExperience.disable();
    this.profileAbilities.disable();
  }

  // boton cancelar formularios
  cancelForm(formGroup: FormGroup) {
    this.UTIL.showLoad();
    formGroup.disable();
    this.reloadGetInfo();
  }

  // boton de summit de los formularios
  onSubmit(isEdit:boolean) {
    if(isEdit){
      this.profileData.enable();
    } else {
      this.UTIL.showLoad();
      this.profileData.disable();
      const form = this.profileData.value;
      this.saveForm(form, 'profileData')
    }

  }
  onSubmittwo(isEdit:boolean) {
    if(isEdit){
      this.profileProf.enable();
    }else {
      this.UTIL.showLoad();
      this.profileProf.disable();
      const form = this.profileProf.value;
      const formPa = {text_profile : form.text_profile.split('\n')};
      this.saveForm(formPa, 'profilePro')
    }

  }
  onSubmitThree(isEdit:boolean, id?: string) {
    if(isEdit){
      this.profileStudies.enable();
    }else if(id != null){
      this.UTIL.showLoad();
      this.profileStudies.disable();
      const form = this.profileStudies.value;
      this.updateForm(form, 'profileStudies', id);
      this.getProfileStudies();
    }else {
      this.UTIL.showLoad();
      this.profileStudies.disable();
      const form = this.profileStudies.value;
      this.saveForm(form, 'profileStudies');
      this.profileStudies.reset();
      this.selectedStudy = undefined;
      this.getProfileStudies();
    }
  }
  onSubmitFour(isEdit:boolean, id?: string) {
    if(isEdit){
      this.profileCertificates.enable();
    }else if (id != null) {
      this.UTIL.showLoad();
      this.profileCertificates.disable();
      const form = this.profileCertificates.value;
      this.updateForm(form, 'profileCertificates', id);
      this.getProfileCertificates();
    } else {
      this.UTIL.showLoad();
      this.profileCertificates.disable();
      const form = this.profileCertificates.value;
      this.saveForm(form, 'profileCertificates');
      this.profileCertificates.reset();
      this.selectedCertificate = undefined;
      this.getProfileCertificates();
    }
  }
  onSubmitFive(isEdit:boolean, id?: string) {
    if(isEdit){
      this.profileExperience.enable();
    }else if(id != null) {
      this.UTIL.showLoad();
      this.profileExperience.disable();
      const form = this.profileExperience.value;
      form.funciones_responsabilidades = form.funciones_responsabilidades.split('\n');
      this.updateForm(form, 'profileExperience', id);
      this.getProfileExperience();
    } else {
      this.UTIL.showLoad();
      this.profileExperience.disable();
      const form = this.profileExperience.value;
      form.funciones_responsabilidades = form.funciones_responsabilidades.split('\n');
      this.saveForm(form, 'profileExperience');
      this.profileExperience.reset();
      this.selectedExperience = undefined;
      this.getProfileExperience();
    }
  }
  onSubmitSix(isEdit:boolean, id?: string) {
    if(isEdit){
      this.profileAbilities.enable();
    }else if (id != null) {
      this.UTIL.showLoad();
      this.profileAbilities.disable();
      const form = this.profileAbilities.value;
      this.updateForm(form, 'profileAbilities', id);
      this.getProfileAbilities();
    } else {
      this.UTIL.showLoad();
      this.profileAbilities.disable();
      const form = this.profileAbilities.value;
      this.saveForm(form, 'profileAbilities');
      this.profileAbilities.reset();
      this.selectedAbilitie = undefined;
      this.getProfileAbilities();
    }
  }

  // Opciones de Seleccion donde se muestra en los campos del Form el seleccionado
  profileStudieSelect(item?: ProfileStudie) {
    if (item) {
      this.profileStudies.disable();
      this.profileStudies.patchValue({
        titulo_obtenido: item.titulo_obtenido,
        nombre_institucion: item.nombre_institucion,
        departamento: item.departamento,
        municipio: item.municipio,
        fecha_inicio: item.fecha_inicio.toISOString().substring(0, 10),
        fecha_fin: item.fecha_fin.toISOString().substring(0, 10)
      });
    } else {
      this.profileStudies.reset();
      this.profileStudies.enable();
    }
  }
  profileCertificateSelect(item?: ProfileCertificate) {
    if (item) {
      this.profileCertificates.disable();
      this.profileCertificates.patchValue({
        nombre_curso: item.nombre_curso,
        fecha_fin: item.fecha_fin.toISOString().substring(0, 10),
        nombre_escuela : item.nombre_escuela,
        categoria: item.categoria,
        url_certificado: item.url_certificado
      });
    }else {
      this.profileCertificates.reset();
      this.profileCertificates.enable();
    }
  }
  profileExperienceSelect(item?: ProfileExperience) {
    if (item) {
      this.profileExperience.disable();
      this.profileExperience.patchValue({
        nombre_empresa: item.nombre_empresa,
        cargo: item.cargo,
        departamento: item.departamento,
        municipio: item.municipio,
        fecha_inicio : item.fecha_inicio.toISOString().substring(0, 10),
        fecha_fin: item.fecha_fin.toISOString().substring(0, 10),
        funciones_responsabilidades: item.funciones_responsabilidades
      });
    } else {
      this.profileExperience.reset();
      this.profileExperience.enable();
    }
  }
  profileAbilitiesSelect(item?: ProfileAbilities) {
    if (item) {
      this.profileAbilities.disable();
      this.profileAbilities.patchValue({
        nombre_habilidad: item.nombre_habilidad,
        porcentaje: item.porcentaje
      });
    }else {
      this.profileAbilities.reset();
      this.profileAbilities.enable();
    }
  }
  listCitiesByDepartment(formGroup: FormGroup, id: string ){
    const departament = formGroup.get('departamento')?.value;
    const ciudades = this.listaCiudades.filter(city => city.departamento === departament);

    const ciudadesSelect = document.getElementById(id) as HTMLSelectElement;
    ciudadesSelect.options.length = 1; // Limpiar las opciones anteriores
    for(const ciudad of ciudades){
      const option = new Option(ciudad.municipio, ciudad.municipio);
      ciudadesSelect.add(option);
    }
  }


  // Se realiza el consumo de los servicios
  saveForm(item: object, form: string) {
    if(['profileData', 'profilePro'].includes(form)) {
      this.dataCv.saveForm(item, form)
      .then(() => {this.UTIL.showAlert('Se ha guardado exitosamente', 'success'); this.UTIL.hideLoad()})
      .catch(error => {this.UTIL.showAlert(error.message, 'danger'); this.UTIL.hideLoad()});
    } else {
      this.dataCv.addList(item, form)
      .then(() => this.UTIL.showAlert('Se ha guardado exitosamente', 'success'))
      .catch(error => this.UTIL.showAlert(error.message, 'danger'));
    }
  }
  updateForm(item: object, form: string, id: string) {
    this.dataCv.updateProfileList(item, form, id)
    .then(() => this.UTIL.showAlert('Se ha actualizado exitosamente', 'success'))
    .catch(error => this.UTIL.showAlert(error.message, 'danger'));
  }
  async deleteForm(form: string, id: string) {
    await this.dataCv.deleteDoc(form, id)
    .then(() => this.UTIL.showAlert('Se elimino exitosamente', 'success'))
    .catch(error => this.UTIL.showAlert(error.message, 'danger'))
  }
  confirmAction(itemName: string, form: string, id: string) {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = 'Confirmar acción';
    modalRef.componentInstance.message = `¿Estás seguro de que quieres eliminar este item: ${itemName}?`;
    modalRef.result.then(async result => {
      if (result === 'confirm') {
        await this.deleteForm(form, id);
      }
      switch (form) {
        case 'profileStudies':
          this.getProfileStudies();
          break
        case 'profileExperience':
          this.getProfileExperience();
          break
        case 'profileCertificates':
          this.getProfileCertificates();
          break
        case 'profileAbilities':
          this.getProfileAbilities();
          break
      }
    }).catch(() => {
      this.UTIL.showAlert('Se ha cancelado la acción', 'warning')
    });
  }
}
