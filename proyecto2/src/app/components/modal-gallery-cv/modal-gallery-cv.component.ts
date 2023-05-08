import { Component, Input, OnInit } from '@angular/core';
import { DataCvService } from '../../services/data-cv.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtilsService } from '../../services/utils.service';
import {
  Gallery,
  GalleryItem,
  ImageItem,
} from '@ngx-gallery/core';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-modal-gallery-cv',
  templateUrl: './modal-gallery-cv.component.html',
  styleUrls: ['./modal-gallery-cv.component.scss']
})
export class ModalGalleryCvComponent implements OnInit{

  @Input() modal: NgbActiveModal = new NgbActiveModal;

  images: GalleryItem[] = [];
  photoProfile!: string;

  constructor(
    private dataCvService: DataCvService,
    private UTIL: UtilsService,
    public gallery: Gallery,
    private modalService: NgbModal
    ){}

  uploadPhoto(event: Event) {
    this.UTIL.showLoad();
    const inputElement = event.target as HTMLInputElement;
    if (!inputElement.files || inputElement.files.length === 0) {
      return;
    }
    const file = inputElement.files[0];
    this.dataCvService.uploadImgCv(file)
    .then(data => {
      this.selecPhotoCv(data.url);
      this.images.push(new ImageItem({src: data.url, thumb: data.url, id: data.path}))
      this.UTIL.hideLoad();
      this.UTIL.showAlert('Se ha subido la foto', 'success')
    })
    .catch(error => {
      this.UTIL.hideLoad();
      this.UTIL.showAlert(error.message, 'danger')
    });
  }

  viewListImg() {
    this.dataCvService.listPhoto()
    .then(result => {
      const items = result.items;
      for (const item of items) {
        this.dataCvService.getUrlPhotos(item.fullPath)
        .then(result => {
          this.images.push(new ImageItem({src: result, thumb: result, id: item.fullPath}));
        })
        .catch(error => this.UTIL.showAlert(error.message, 'danger'))
      }
    })
    .catch(error => this.UTIL.showAlert(error.message, 'danger'))
  }

  deletePhoto(path: string) {
    this.UTIL.showLoad();
    this.dataCvService.deleteitemCv(path)
    .then(() => {
      this.deleteItemArray(path);
      this.UTIL.hideLoad();
      this.UTIL.showAlert('Se elimino la imagen exitosamente','success');
    })
    .catch(error => this.UTIL.showAlert(error.message, 'danger'))
  }

  deleteItemArray(id: string) {
    const index = this.images.findIndex(item => item.data.id === id);
    if (index !== -1) {
      this.images.splice(index, 1);
    }
  }

  photoProfileSelect() {
    this.dataCvService.getPhotoCv()
    .then(data => {
      this.photoProfile = data.get('photo');
    })
    .catch(error => this.UTIL.showAlert(error.message, 'danger'))
  }

  selecPhotoCv(url: string){
    this.dataCvService.selectPhotoCv(url)
    .then((data) => {
      this.photoProfile = data.get('photo');
      this.UTIL.showAlert('Se ha cambiado la foto de perfil', 'success')
    })
    .catch(error => this.UTIL.showAlert(error.message, 'danger'))
  }

  openView() {
    this.gallery.ref().load(this.images);
  }

  confirmAction(path: string) {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = 'Confirmar acción';
    modalRef.componentInstance.message = `¿Estás seguro de que quieres eliminar este item?`;
    modalRef.result.then(async result => {
      if (result === 'confirm') {
        await this.deletePhoto(path);
      }
    }).catch(() => {
      this.UTIL.showAlert('Se ha cancelado la acción', 'warning')
    });
  }

  ngOnInit(): void {
    this.viewListImg();
    this.openView();
    this.photoProfileSelect()
  }
}
