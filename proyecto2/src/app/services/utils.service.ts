import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private alertSubject = new Subject<any>();
  alert$ = this.alertSubject.asObservable();

  private loadingSubject = new Subject<any>();
  loadind$ = this.loadingSubject.asObservable();

  showAlert(message: string, type: string) {
    this.alertSubject.next({ message, type });
  }
  clearAlert() {
    this.alertSubject.next(null);
  }

  showLoad() {
    this.loadingSubject.next(true);
  }
  hideLoad() {
    this.loadingSubject.next(false);
  }
}
